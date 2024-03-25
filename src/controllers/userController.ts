import { userData } from "@cTypes/userTypes";
import userService from "@services/userService";
import { NextFunction, Request, Response } from "express";
import fs from "fs";

const create = async (req: Request, res: Response, next: NextFunction) => {
  const { email, name, password }: userData = req.body;
  const imageUrl = req.file ? req.file.path : null;
  try {
    await userService.create({ email, name, password, imageUrl });
    res.status(201).json({ message: "User created" });
  } catch (e) {
    if (imageUrl) {
      fs.unlinkSync(imageUrl);
    }
    next(e);
  }
};

const getAll = async (_req: Request, res: Response) => {
  try {
    const users = await userService.getAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

const getById = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const user = await userService.getById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const userData: userData = req.body;
    const user = await userService.update(id, userData);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const user = await userService.remove(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export default {
  create,
  getAll,
  getById,
  update,
  remove,
};
