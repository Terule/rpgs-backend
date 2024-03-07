const model = require('../model/userModel');

export const createUserService = async ({name, email, password, isActive = true, isAdmin = false, imageUrl = null}) => {
  const user = await model.createUser({name, email, password, isActive, isAdmin, imageUrl});
  return user;
}