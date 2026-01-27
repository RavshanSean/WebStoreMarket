import express from 'express';
import cors from 'cors';

import { ENV } from './config/env';
import { clerkMiddleware } from '@clerk/express'

import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import commentRoutes from './routes/commentRoutes';

const app = express();

app.use(cors({ origin: ENV.FRONTEND_URL })); //frontend run on 3000 port
app.use(clerkMiddleware()); // auth obj will be attached to the req
app.use(express.json()); //parese json req body
app.use(express.urlencoded({ extended: true })); //parses form sata something like HTML forms

app.get('/', (req, res) => {
  res.json({
    message: 'Welcom to prouct API - Powered by PostgereSQL, Drizzle ORM & Clerk Auth',
    endpoint: {
        users: "/api/users",
        products: "/api/products",
        comments: "/api/comments",
    },
  });
});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/comments", commentRoutes);

app.listen(ENV.PORT, () => console.log('Server is running on PORT:', ENV.PORT));