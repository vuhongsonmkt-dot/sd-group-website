import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";

export const leads = sqliteTable("leads", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  company: text("company"),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  need: text("need"),
  message: text("message").notNull(),
  createdAt: integer("created_at", { mode:"timestamp_ms" }).notNull(),
}, table => [index("idx_leads_created_at").on(table.createdAt)]);
