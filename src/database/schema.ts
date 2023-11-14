import {
  pgTable,
  serial,
  text,
  varchar,
  integer,
  smallint,
  bigint,
  smallserial,
  bigserial,
  decimal,
  numeric,
  real,
  doublePrecision,
  boolean,
  char,
  json,
  jsonb,
  time,
  timestamp,
  date,
  interval,
  pgEnum,
} from "drizzle-orm/pg-core";

// the main Type Categories in PostgreSQL
// - Numeric
//   - integer (-2 billion to +2 billion)
//   - smallint (-32,768 to +32,767)
//   - bigint (-9 quintillion to +9 quintillion)
//   - serial (auto incrementing)
//     - serial (serial4) (integer type)
//     - smallserial (serial2) (smallint type)
//     - bigserial (serial8) (bigint type)
//   - decimal
//      - decimal (131072 digits before the decimal point, 16383 digits after the decimal point)
//      - real (float4) (6 digit decimal precision)
//      - double doublePrecision (float8) (15 digit decimal precision)
// - Boolean ( 0 / 1 or true / false)
// - Text
//   - text (variable length unlimited character string)
//   - varchar (variable length character string, can store strings up to N characters (not bytes))
//   - char (fixed-length, blank padded character string, can store strings up to N characters (not bytes))
// - JSON ()
//   - json (you can store a javascript object saved as a json string)
//   - jsonb (the json will converted to binary form of the object)
// - DateTime
//   - time (only the time)
//   - timestamp (the time and the date)
//   - date (only the date)
//   - interval (the number of milliseconds between two specific datetimes)
// - Enum (similar to TypeScript see below)
// - Binary

// 1st parameter NAME OF THE TABLE
// 2nd parameter is an OBJECT that is all the COLUMNS
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 30 }),
  address: varchar("address", { length: 256 }),
  score: integer("score").default(0),
  createdAt: date("createdAt").defaultNow(), // timestamp of right now
});

// we use pgEnum() and pass it the name of the enum, and the possible values of the enum
export const moodEnum = pgEnum("mood", ["sad", "ok", "happy"]);

export const typesTable = pgTable("typesTable", {
  exampleInteger: integer("exampleInteger"),
  exampleSmallInt: smallint("exampleSmallInt"),
  exampleBigInt: bigint("exampleBigInt", { mode: "number" }), // { mode: "bigint" }
  exampleSerial: serial("exampleSerial"),
  exampleSmallSerial: smallserial("exampleSmallSerial"),
  exampleBigSerial: bigserial("exampleBigSerial", { mode: "number" }), // { mode: "bigint" }
  exampleSerialWithPrimaryKey: serial(
    "exampleSerialWithPrimaryKey"
  ).primaryKey(),
  exampleDecimal: decimal("exampleDecimal", { precision: 7, scale: 2 }), // 12345.67 precision is total number of digits, scale is number of digits after the decimal point
  exampleNumeric: numeric("exampleNumeric", { precision: 7, scale: 2 }), // 12345.67 this is the same as the decimal type^
  exampleReal: real("exampleReal"),
  exampleDoublePrecision: doublePrecision("exampleDoublePrecision"),
  exampleBoolean: boolean("exampleBoolean"),
  exampleText: text("exampleText"),
  exampleVarChar: varchar("exampleVarChar", { length: 256 }), // it can store a text string up to at most 256 characters
  exampleChar: char("exampleChar", { length: 10 }), // it will add blank space to fill the remaining space up to the length
  exampleJSON: json("exampleJSON"),
  exampleJSONb: jsonb("exampleJSONb"),
  exampleTime: time("exampleTime", {
    precision: 4, // this sets the number of decimals after the second
    withTimezone: true, // it should include timezone information, the "+00" at the end of the string denotes the timezone
  }).defaultNow(), // if no value is provided the current timestamp will be used
  exampleTimeStamp: timestamp("exampleTimeStamp", {
    mode: "date", // "string" / "date" to choose to save it as either a string or a date
  }).defaultNow(),
  exampleDate: date("exampleDate"),
  exampleInterval: interval("exampleInterval"),
  exampleEnum: moodEnum("exampleEnum").default("ok"), // we can chain on .default() and specify the default value
});

// Default Values:

// we can chain on .default() and specify the default value
// for date time we can use .defaultNow()

// Not Null:

// by default all your values CAN be Null, we can chain on .notNull()

// Primary Key:

// set the primary key of your table, we can chain on .primaryKey()
