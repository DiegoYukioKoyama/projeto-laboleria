import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import { createClientSchema } from "../schemas/create.client.schema.js";
import { createClient, getClientOrders } from "../controllers/clients.controller.js";

const clientsRouter = Router();

clientsRouter.post("clients", validateSchema(createClientSchema),createClient);
clientsRouter.get("/clients/:id/orders", getClientOrders);

export default clientsRouter;