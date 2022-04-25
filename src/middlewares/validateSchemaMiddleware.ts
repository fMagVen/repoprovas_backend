import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

export default function validateSchema(schema: Joi.ObjectSchema){
	return (req: Request, res: Response, next: NextFunction) => {
		const validation = schema.validate(req.body)
		if (validation.error) next({type: 422, message: validation.error.message})
		else next()
	}
}