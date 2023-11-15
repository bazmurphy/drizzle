import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  // the location of the schema file
  schema: "./src/database/schema.ts",
  // the directory to output the migrations to
  out: "./migrations",
} satisfies Config;
