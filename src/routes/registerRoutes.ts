import registerController from "@controllers/registerController";
import { Middlewares } from "@middlewares/middlewares";
import { Router } from "express";

const route = Router();

const middlewares = new Middlewares();

route.post("/", middlewares.upload, registerController.register);

export default route;
