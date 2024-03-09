import { Router } from "express";
import prisma from "@utils/prismaClient";
import { UserController } from "@controllers/userController";
import { UserService } from "@services/userService";
import { UserModel } from "@models/userModel";


const route = Router();

const userModel = new UserModel(prisma);
const userService = new UserService(userModel);
const userController = new UserController(userService);

route.get("/", userController.getAll);
route.post("/", userController.create);
route.get("/:id", userController.getById);
route.put("/:id", userController.update);
route.delete("/:id", userController.delete);
route.get("/:email", userController.getByEmail);

export default route;