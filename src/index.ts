import "dotenv/config";
import express, { Request, Response } from "express";
import { usersRouter } from "./routes/usersRoutes";

export const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("An API to test the Drizzle ORM");
});

app.use("/users", usersRouter);

export const server = app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `Node Express Server listening on SERVER_PORT ${process.env.SERVER_PORT}`
  );
});
