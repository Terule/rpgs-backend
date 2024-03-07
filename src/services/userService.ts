import { UserModel } from "models/userModel";
import { userData } from "types/userTypes";

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
}
