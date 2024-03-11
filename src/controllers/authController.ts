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

  public login = async (req: Request, res: Response) => {}; 

  public verify = async (req: Request, res: Response) => {}
}