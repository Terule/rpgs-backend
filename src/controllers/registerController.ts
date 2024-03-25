import { userData } from "@cTypes/userTypes";
import userService from "@services/userService";
import { NextFunction, Request, Response } from "express";
import fs from "fs";

const register = async (req: Request, res: Response, next: NextFunction) => {
  const { email, name, password }: userData = req.body;
  const imageUrl = req.file ? req.file.path : null;
  try {
    await userService.create({ email, name, password, imageUrl });
    res.status(201).json({ message: "User created"});
  } catch (e) {
    if (imageUrl) {
      fs.unlinkSync(imageUrl);
    }
    next(e);
  }
};

export default {
  register,
};
