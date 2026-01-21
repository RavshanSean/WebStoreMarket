// Users table schema
// so what we did and learn here is how 3 different tables and relations between them are created using Drizzle ORM

import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
// key is what we have in code
export const users = pgTable("users", {
    id: text("id").primaryKey(), //clerk user id
    email: text("email").notNull().unique(),
    name: text("name"),
    imageUrl: text("image_url"),
    createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "date" }).notNull().defaultNow(),
});


// Products table schema
export const products = pgTable("products", {
    id: uuid("id").defaultRandom().primaryKey(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    imageUrl: text("image_url").notNull(),
    userId: text("user_id")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "date" }).notNull().defaultNow(),
});


// Comments table schema
export const comments = pgTable("comments", {
    id: uuid("id").defaultRandom().primaryKey(),
    content: text("content").notNull(),
    userId: text("user_id")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    productId: uuid("product_id")
        .notNull()
        .references(() => products.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
    //updatedAt: timestamp("updated_at", { mode: "date" }).notNull().defaultNow(),
});


// user relations
export const usersRelations = relations(users, ({ many }) => ({
    products: many(products), // one user = to many products
    comments: many(comments), // one user = to many comments
}));


//products
export const productsRelations = relations(products, ({ one, many }) => ({
    comments: many(comments), // one product = to many comments
    user: one(users, {
        fields: [products.userId],
        references: [users.id],
    }), // one products = to one user
}));


// comments and relations so a comment = to one user and one product
export const commentsRelations = relations(comments, ({ one }) => ({
    user: one(users, {
        fields: [comments.userId],
        references: [users.id],
    }), // one comment = to one user
    product: one(products, {
        fields: [comments.productId],
        references: [products.id],
    }), // one comment = to one product
}));

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;
export type Comment = typeof comments.$inferSelect;
export type NewComment = typeof comments.$inferInsert;