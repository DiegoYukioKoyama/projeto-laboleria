import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js"
import { dateSchema } from "../schemas/orders.date.schema.js";
import { createNewOrder, getAllOrders, getOrderById } from "../controllers/orders.controller.js";
import { newOrder } from "../schemas/new.order.schema.js";

const ordersRouter = Router();

ordersRouter.get("/orders", validateSchema(dateSchema), getAllOrders);
ordersRouter.get("/orders/:id", getOrderById);
ordersRouter.post("/order", validateSchema(newOrder), createNewOrder);

export default ordersRouter;