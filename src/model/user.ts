import { PrismaClient } from "@prisma/client";

type UserData = {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  isActive: boolean;
  imageUrl: string | null;
}

