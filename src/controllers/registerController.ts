import { userData } from '@cTypes/userTypes';
import { UserService } from '@services/userService';
import { uploadSingle } from '@utils/multerConfig';
import { NextFunction, Request, Response } from 'express';
import fs from 'fs';

export class RegisterController {
  private _service: UserService;

  constructor(service: UserService) {
    this._service = service;
  }
  
  public register = async (req: Request, res: Response) => {
      try {
        const {email, name, password}: userData = req.body;
        const imagePath = req.file ? req.file.path : null;
        await this._service.create({email, name, password, imageUrl: imagePath});
        res.status(201).json({ message: "User created" });
      } catch (error) {
        if (req.file) {
          fs.unlinkSync(req.file.path);
        }
        res.status(500).json({ error: (error as Error).message });
      }
  };

  public upload = (req: Request, res: Response, next: NextFunction) => {
    uploadSingle(req, res, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      }
      next();
    });
  };
}