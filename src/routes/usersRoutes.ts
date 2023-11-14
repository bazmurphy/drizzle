import express from "express";
import { getAllUsers, addUser } from "../controllers/usersController";

export const usersRouter = express.Router();

usersRouter.get("/all", getAllUsers);
// this should obviously be .post
usersRouter.get("/add", addUser);
