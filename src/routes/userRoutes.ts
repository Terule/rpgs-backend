import { Router } from "express";

import { UserController } from "@controllers/userController";
import { UserService } from "@services/userService";
import { UserModel } from "@models/userModel";
import prisma from "@utils/prismaClient";


const route = Router();

const userModel = new UserModel(prisma);
const userService = new UserService(userModel);
const userController = new UserController(userService);

route.get("/", userController.getAll);
route.get("/:email", userController.getByEmail);
route.get("/:id", userController.getById);
route.post("/create", userController.create);
route.put("/:id", userController.update);
route.delete("/:id", userController.delete);

export default route;