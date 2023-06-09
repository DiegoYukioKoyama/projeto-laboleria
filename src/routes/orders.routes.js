import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js"
import { dateSchema } from "../schemas/orders.schema.js";
import { getAllOrders } from "../controllers/orders.controller.js";

const ordersRouter = Router();

ordersRouter.get("/orders", getAllOrders);

export default ordersRouter;