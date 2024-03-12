import { Router, request } from "express";
import prisma from "@utils/prismaClient";
import { RegisterController } from "@controllers/registerController";
import { UserService } from "@services/userService";
import { UserModel } from "@models/userModel";
import { Middlewares } from "@middlewares/middlewares";


const route = Router();

const userModel = new UserModel(prisma);
const userService = new UserService(userModel);
const registerController = new RegisterController(userService);
const middlewares = new Middlewares

route.post("/", middlewares.upload , registerController.register);

export default route;