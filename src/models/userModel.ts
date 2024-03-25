import AppError from "@errors/AppError";
import { Prisma } from "@prisma/client";
import prisma from "@utils/prismaClient";
import { userData } from "types/userTypes";

const create = async (userData: userData) => {
  try {
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
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2002":
          throw new AppError(400, "Email already in use");
        case "P1000":
          throw new AppError(503, "Database host user name or password is incorrect");
        case "P1001":
          throw new AppError(503, "Cannot connect to database host");
        case "P1002":	
          throw new AppError(408, "Database connection timed out");
        case "P1003":
          throw new AppError(503, "Database does not exist");
        default:
          throw new AppError(500, "Internal server error");
      }
    }
    throw new AppError(500, (error as Error).message);
  }
};

const getByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  return user;
};

const getById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
};

const getAll = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      isAdmin: true,
      isActive: true,
      imageUrl: true,
    },
  });
  return users;
};

const update = async (id: string, userData: userData) => {
  const user = await prisma.user.update({
    where: { id },
    data: userData,
  });

  return user;
};

const remove = async (id: string) => {
  const user = await prisma.user.delete({
    where: { id },
  });
  return user;
};

export default {
  create,
  getByEmail,
  getById,
  getAll,
  update,
  remove,
};
