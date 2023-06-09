import joi from "joi";

export const createClientSchema = joi.object({
    name: joi.string().required(),
    address: joi.string().required(),
    phone: joi.string().length(10,11).pattern(/^\d+$/).required()
})