import Joi from "joi";

export const signupLoginSchema = Joi.object({
	email: Joi.string().required(),
	password: Joi.string().required(),
	new: Joi.boolean().required()
})