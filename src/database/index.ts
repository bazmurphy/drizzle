import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

export const pool = new Pool({
  // connectionString: "postgres://user:password@host:port/db",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

export const db = drizzle(pool);

// added these here to log messages about the Database Connection
// pool.on("connect", () => {
//   console.log("Client connected to the PostgreSQL Database");
// });

// pool.on("acquire", () => {
//   console.log("Client acquired from the Database Connection Pool");
// });

// pool.on("remove", () => {
//   console.log("Client removed from the Database Connection Pool");
// });

// pool.on("error", (error) => {
//   console.log("Error in the PostgreSQL Database Connection:", error.message);
// });
