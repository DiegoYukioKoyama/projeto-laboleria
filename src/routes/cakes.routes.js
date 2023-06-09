import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import { cakeSchema } from "../schemas/create.cake.schema.js";
import { createCake } from "../controllers/cakes.controllers.js";

const cakesRouter = Router();

cakesRouter.post("/cakes", validateSchema(cakeSchema), createCake);

export default cakesRouter;