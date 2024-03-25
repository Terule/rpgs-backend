import { JwtFunctions } from "@jwt/jwtFunctions";
import { Request, Response } from "express";
import userService from "@services/userService";

const jwt = new JwtFunctions();

type jwtPayload = {
  id: string;
};

const jwtSecret = process.env.JWT_SECRET || "secret";
const jwtOptions = {
  expiresIn: "1d",
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await userService.getByEmail(email);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const isPasswordValid = password === user.password;
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = jwt.sign(
    { id: user.id },
    jwtSecret,
    jwtOptions
  );

  res.status(200).json({ token });
};

const verify = async (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, jwtSecret) as jwtPayload;
    const user = await userService.getById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User verified" });
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default {
  login,
  verify,
};
