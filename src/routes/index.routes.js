import { Router } from "express";
import ordersRouter from "./orders.routes.js";
import clientsRouter from "./clients.routes.js";
import cakesRouter from "./cakes.routes.js";

const router = Router();

router.use(ordersRouter);
router.use(clientsRouter);
router.use(cakesRouter);

export default router;