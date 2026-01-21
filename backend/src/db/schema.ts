// Users table schema

import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
// key is wat we have in code
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