import Joi from 'joi';

export const userPayloadSchema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    password: Joi.string().min(6).required(),
    fullname: Joi.string().required(),
});