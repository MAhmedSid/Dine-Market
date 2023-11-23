import {
    integer,
    pgTable,
    serial,
    text,
    timestamp,
    boolean,
    numeric,
    varchar,
  } from "drizzle-orm/pg-core";
  import { sql } from "@vercel/postgres";
  import { drizzle } from "drizzle-orm/vercel-postgres";
  import { InferInsertModel, InferSelectModel } from "drizzle-orm";
  

  export const cartTable = pgTable("cart", {
    user_id: varchar("user_id",{length:256}).notNull(),
    product_id: varchar("product_id",{length:256}).notNull(),
    product_qty: integer("product_qty").notNull(),
  });


  export type Cart = InferSelectModel<typeof cartTable>;
  export type NewCart = InferInsertModel<typeof cartTable>;
  
  export const db = drizzle(sql);
  