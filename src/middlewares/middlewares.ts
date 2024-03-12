import { uploadSingle } from "@utils/multerConfig";
import { NextFunction, Request, Response } from "express";

export class Middlewares {
  public upload = (req: Request, res: Response, next: NextFunction) => {
    uploadSingle(req, res, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      }
      next();
    });
  };
}
