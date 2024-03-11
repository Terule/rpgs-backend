import { UserService } from '@services/userService';
import { Request, Response } from 'express';

export class RegisterController {
  private _service: UserService;

  constructor(service: UserService) {
    this._service = service;
  }
  
  public register = async (req: Request, res: Response) => {
    console.log(req.file);
  };
}