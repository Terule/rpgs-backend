import { Response, Request } from 'express';
import { userData } from "@cTypes/userTypes";
import { UserService } from "@services/userService";

export class userController {
  private _userService: UserService;

  constructor(userService: UserService) {
    this._userService = userService;
  }

  public createUser = async (req: Request, res: Response) => {
    try {
      const userData: userData = req.body;
      const user = await this._userService.createUser(userData);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };

  public getUserByEmail = async (req: Request, res: Response) => {
    try {
      const email: string = req.params.email;
      const user = await this._userService.getUserByEmail(email);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };

  public getUserById = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      const user = await this._userService.getUserById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };

  public updateUser = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      const userData: userData = req.body;
      const user = await this._userService.updateUser(id, userData);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };

  public deleteUser = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      const user = await this._userService.deleteUser(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };
}