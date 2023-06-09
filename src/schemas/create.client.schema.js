import joi from "joi";

export const createClientSchema = joi.object({
    name: joi.string().required(),
    address: joi.string().required(),
    phone: joi.string().min(10).max(10).pattern(/^\d+$/).required()
})