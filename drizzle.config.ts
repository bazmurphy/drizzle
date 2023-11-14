import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  // the location of the schema file
  schema: "./src/database/schema.ts",
  // the directory to output the migrations to
  out: "./migrations",
  // the driver for drizzle studio
  driver: "pg",
  // the db credentials for drizzle studio
  dbCredentials: {
    host: process.env.DB_HOST!, // ! non-null assertion operator
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE!, // ! non-null assertion operator
  },
} satisfies Config;
