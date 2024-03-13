import { Request, Response } from 'express';
import { UserService } from "@services/userService";
import { JwtFunctions } from "@jwt/jwtFunctions";
import { jwtOptions, jwtSecret } from '@cTypes/jwtTypes';

type jwtPayload = {
  id: string;
}

export class AuthController {
  private _service: UserService;
  private _jwt: JwtFunctions;
  private _jwtSecret: jwtSecret;
  private _jwtOptions: jwtOptions;

  constructor(service: UserService, jwt: JwtFunctions, jwtOptions: jwtOptions) {
    this._service = service;
    this._jwt = jwt;
    this._jwtSecret = process.env.JWT_SECRET || "secret";
    this._jwtOptions = jwtOptions;
  }

  public login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await this._service.getByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isPasswordValid = password === user.password;
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = this._jwt.sign({ id: user.id }, this._jwtSecret, this._jwtOptions);

    res.status(200).json({ token });
  }; 

  public verify = async (req: Request, res: Response) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
    try {
      const decoded = this._jwt.verify(token, this._jwtSecret) as jwtPayload;
      const user = await this._service.getById(decoded.id);
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User verified' });
    } catch (error) {
      res.status(401).json({ message: 'Invalid token' });
    }
  }
}