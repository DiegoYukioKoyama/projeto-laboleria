import joi from "joi";

export const dateSchema = joi.object({
    date: joi.string().regex(/^\d{4}-\d{2}-\d{2}$/)
});