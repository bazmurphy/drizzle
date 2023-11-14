import { db } from "../database/index";
import { users } from "../database/schema";
import { eq } from "drizzle-orm";
import { Request, Response } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    // we chain methods eg. select() and from() to the db object
    const query = await db.select().from(users);
    // console.log("query:", query);
    res.json(query);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    console.log("userId:", userId);
    // notice eq() Equal To (it must be imported at the top)
    const query = await db.select().from(users).where(eq(users.id, userId));
    res.json(query);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
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
    res.status(500).json({ message: "server error" });
  }
};
