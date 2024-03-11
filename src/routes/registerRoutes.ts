import { Router } from "express";
import prisma from "@utils/prismaClient";
import { RegisterController } from "@controllers/registerController";
import { UserService } from "@services/userService";
import { UserModel } from "@models/userModel";
import { upload } from "@utils/multerConfig";

const route = Router();

const userModel = new UserModel(prisma);
const userService = new UserService(userModel);
const registerController = new RegisterController(userService);

route.post("/", upload.single('image') , registerController.register);

export default route;