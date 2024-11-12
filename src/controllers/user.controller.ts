import { Request, Response } from "express";

export const userController = {
  create: async (req: Request, res: Response) => {
    try {
      // await userService.create(req.body);
      res.status(201).send("User created");
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  },

  get: async (req: Request, res: Response) => {
    try {
      // const user = await userService.get(req.params.id);
      // user ? res.json(user) : res.status(404).send("User not found");
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  },
};
