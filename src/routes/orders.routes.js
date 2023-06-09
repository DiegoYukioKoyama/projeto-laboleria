import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js"
import { dateSchema } from "../schemas/orders.schema.js";
import { getAllOrders, getOrderById } from "../controllers/orders.controller.js";

const ordersRouter = Router();

ordersRouter.get("/orders",validateSchema(dateSchema), getAllOrders);
ordersRouter.get("/orders/:id", getOrderById);

export default ordersRouter;