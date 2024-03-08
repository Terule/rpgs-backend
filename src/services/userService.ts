import { UserModel } from "@models/userModel";
import { userData } from "@cTypes/userTypes";

export class UserService {
  private _model: UserModel;

  constructor(model: UserModel) {
    this._model = model;
  }

  public createUser = async ({
    name,
    email,
    password,
    isActive = true,
    isAdmin = false,
    imageUrl = null,
  }: userData) => {
    const user = await this._model.createUser({
      name,
      email,
      password,
      isActive,
      isAdmin,
      imageUrl,
    });
    return user;
  };

  public getUserByEmail = async (email: string) => {
    const user = await this._model.getUserByEmail(email);
    return user;
  };

  public getUserById = async (id: string) => {
    const user = await this._model.getUserById(id);
    return user;
  };
  

}
