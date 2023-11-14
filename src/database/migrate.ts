import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db } from "./index";

async function main() {
  try {
    console.log("Migration Apply Started...");

    // we call the migrate function from drizzle and have to pass in:
    // [1] the database connection
    // [2] an object with the migrations folder path
    await migrate(db, { migrationsFolder: "migrations" });

    console.log("Migration Apply Ended...");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
