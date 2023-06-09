import joi from "joi";

export const cakeSchema = joi.object({
    name: joi.string().min(2).required(),
    price: joi.number().min(1).required(),
    image: joi.string().min(1).uri().required(),
    description: joi.string().allow('').optional()
})