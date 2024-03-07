const { PrismaClient } = require("@prisma/client");


const prisma = new PrismaClient();

export const createUser = async (userData) => {
  const user = await prisma.user.create({
    data: userData,
    select: {
      id: true,
      name: true,
      email: true,
      isAdmin: true,
      isActive: true,
      imageUrl: true,
    },
  });
  return user;
}

export const getUserByEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  return user;
}

export const getUserById = async (id) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
}

export const updateUser = async (id, userData) => {
  const user = await prisma.user.update({
    where: { id },
    data: userData,
  });
  return user;
}

export const deleteUser = async (id) => {
  const user = await prisma.user.delete({
    where: { id },
  });
  return user;
}

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
  updateUser,
  deleteUser,
};