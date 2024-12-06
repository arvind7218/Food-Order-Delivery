import express from "express";
import authMiddleware from "../middleware/auth.js"; // Ensure the correct path and extension
import { listOrders, placeOrder, userOrders, verifyOrder, updateStatus } from "../controllers/orderController.js"; // Include the .js extension

const orderRouter = express.Router();

// Define the route for placing orders
orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders",authMiddleware,userOrders);
orderRouter.get("/list",listOrders);
orderRouter.post("/status",updateStatus);

export default orderRouter;
