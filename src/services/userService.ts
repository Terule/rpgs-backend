import { UserModel } from "@models/userModel";
import { userData } from "@cTypes/userTypes";

export class UserService {
  private _model: UserModel;

  constructor(model: UserModel) {
    this._model = model;
  }

  public create = async ({
    name,
    email,
    password,
    isActive = true,
    isAdmin = false,
    imageUrl = null,
  }: userData) => {
    const user = await this._model.create({
      name,
      email,
      password,
      isActive,
      isAdmin,
      imageUrl,
    });
    return user;
  };

  public getAll = async () => {
    const users = await this._model.getAll();
    return users;
  }

  public getByEmail = async (email: string) => {
    const user = await this._model.getByEmail(email);
    return user;
  };

  public getById = async (id: string) => {
    const user = await this._model.getById(id);
    return user;
  };

  public update = async (id: string, userData: userData) => {
    const user = await this._model.update(id, userData);
    return user;
  };

  public delete = async (id: string) => {
    const user = await this._model.delete(id);
    return user;
  };
}
