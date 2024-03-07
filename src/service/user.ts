import { createUser, getUserById, getUserByEmail, updateUser, deleteUser } from '../model/user';

type userData = {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  isActive: boolean;
  imageUrl: string | null;
}

export const createUserService = async ({name, email, password, isActive = true, isAdmin = false, imageUrl = null}:userData) => {
  const user = await createUser({name, email, password, isActive, isAdmin, imageUrl});
  return user;
}