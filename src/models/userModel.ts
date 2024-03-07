import { PrismaClient } from "@prisma/client";
import { userData } from "types/userTypes";

export class UserModel {
  private _prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this._prisma = prisma;
  }

  public createUser = async (userData: userData) => {
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

  public getUserByEmail = async (email: string) => {
    const user = await this._prisma.user.findUnique({
      where: { email },
    });
    return user;
  };

  public getUserById = async (id: string) => {
    const user = await this._prisma.user.findUnique({
      where: { id },
    });
    return user;
  };

  public updateUser = async (id: string, userData: userData) => {
    const user = await this._prisma.user.update({
      where: { id },
      data: userData,
    });
    return user;
  };

  public deleteUser = async (id: string) => {
    const user = await this._prisma.user.delete({
      where: { id },
    });
    return user;
  };
}
