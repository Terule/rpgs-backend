import { PrismaClient } from "@prisma/client";
import { userData } from "types/userTypes";

export class UserModel {
  private _prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this._prisma = prisma;
  }

  public create = async (userData: userData) => {
    const user = await this._prisma.user.create({
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
  };

  public getByEmail = async (email: string) => {
    const user = await this._prisma.user.findUnique({
      where: { email },
    });
    return user;
  };

  public getById = async (id: string) => {
    const user = await this._prisma.user.findUnique({
      where: { id },
    });
    return user;
  };

  public getAll = async () => {
    const users = await this._prisma.user.findMany({
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
  }

  public update = async (id: string, userData: userData) => {
    const user = await this._prisma.user.update({
      where: { id },
      data: userData,
    });
    return user;
  };

  public delete = async (id: string) => {
    const user = await this._prisma.user.delete({
      where: { id },
    });
    return user;
  };
}
