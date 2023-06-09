import { Router } from "express";
import ordersRouter from "./orders.routes.js";

const router = Router();

router.use(ordersRouter);

export default router;