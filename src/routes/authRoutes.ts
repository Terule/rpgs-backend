import { Router } from "express";
import prisma from "@utils/prismaClient";
import { AuthController } from "@controllers/authController"; 
import { UserService } from "@services/userService";
import { UserModel } from "@models/userModel";
import { JwtFunctions } from "@jwt/jwtFunctions";

const route = Router();

const jwt = new JwtFunctions();
const secret = process.env.JWT_SECRET;
const config = {
  expiresIn: '1d'
};

const userModel = new UserModel(prisma);
const userService = new UserService(userModel);
const authController = new AuthController(userService, jwt, secret, config);

route.post("/login", authController.login);
route.post("/verify", authController.verify);

export default route;