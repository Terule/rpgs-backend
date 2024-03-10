import { Request, Response } from 'express';
import { UserService } from "@services/userService";
import { JwtFunctions } from "@jwt/jwtFunctions";
import { jwtOptions, jwtSecret } from '@cTypes/jwtTypes';

export class AuthController {
  private _service: UserService;
  private _jwt: JwtFunctions;
  private _jwtSecret: jwtSecret;
  private _jwtOptions: jwtOptions;

  constructor(service: UserService, jwt: JwtFunctions, jwtSecret: jwtSecret, jwtOptions: jwtOptions) {
    this._service = service;
    this._jwt = jwt;
    this._jwtSecret = jwtSecret;
    this._jwtOptions = jwtOptions;
  }

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user = await this._service.getByEmail(email);
      if (user && user.password === password) {
        const { password: _, ...userWithoutPassword } = user;
        const token = this._jwt.sign(userWithoutPassword, this._jwtSecret, this._jwtOptions);
        res.status(200).json({ user: userWithoutPassword, token });
      }
      res.status(401).json({ error: "Email or password is incorrect" });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
      }
    }; 

  public register = async (req: Request, res: Response) => {}
}