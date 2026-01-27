import { Router } from "express";
import * as productController from "../controllers/productController";
import { requireAuth } from "@clerk/express";

const router = Router();

router.get("/", productController.getAllProducts);

router.get("/my", requireAuth(), productController.getMyProducts);

router.get("/:id", productController.getProductById);

router.post("/", requireAuth(), productController.createProduct);

router.put("/:id", requireAuth(), productController.updateProduct);

router.delete("/:id", requireAuth(), productController.deleteProduct);

export default router;