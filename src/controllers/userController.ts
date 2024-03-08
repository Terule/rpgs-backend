import { Response, Request } from 'express';
import { userData } from "@cTypes/userTypes";
import { UserService } from "@services/userService";

export class UserController {
  private _userService: UserService;

  constructor(userService: UserService) {
    this._userService = userService;
  }

  public create = async (req: Request, res: Response) => {
    try {
      const userData: userData = req.body;
      const user = await this._userService.create(userData);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };

  public getAll = async (req: Request, res: Response) => {
    try {
      const users = await this._userService.getAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };

  public getByEmail = async (req: Request, res: Response) => {
    try {
      const email: string = req.params.email;
      const user = await this._userService.getByEmail(email);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };

  public getById = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      const user = await this._userService.getById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };

  public update = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      const userData: userData = req.body;
      const user = await this._userService.update(id, userData);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };

  public delete = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      const user = await this._userService.delete(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };
}