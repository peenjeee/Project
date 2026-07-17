import Joi from 'joi';

export const collaborationPayloadSchema = Joi.object({
    noteId: Joi.string().required(),
    userId: Joi.string().required(),
});

export const collaborationDeletePayloadSchema = Joi.object({
    noteId: Joi.string().required(),
    userId: Joi.string().required(),
});