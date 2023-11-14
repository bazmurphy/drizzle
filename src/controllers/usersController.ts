import { db } from "../database/index";
import { users } from "../database/schema";
import { Request, Response } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    // we chain methods eg. select() and from() to the db object
    const query = await db.select().from(users);
    // console.log("query:", query);
    res.json(query);
  } catch (error) {
    console.error(error);
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    // this would come from a post body or some other place
    const newUser = {
      fullName: "Rojina",
      phone: "999",
      address: "On her Ipad",
    };
    const query = await db.insert(users).values(newUser).returning();
    // console.log("query:", query);
    res.json(query);
  } catch (error) {
    console.error(error);
  }
};
