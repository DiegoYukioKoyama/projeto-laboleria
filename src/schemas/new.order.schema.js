import joi from "joi";

export const newOrder = joi.object({
    clientId: joi.number().required(),
    cakeId: joi.number().required(),
    quantity: joi.number().required(),
    totalPrice: joi.number().required()
});