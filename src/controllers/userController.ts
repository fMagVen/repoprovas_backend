import { Request, Response } from 'express'
import * as userService from '../services/userService.js'
import { NextFunction } from 'express'

export default async function signUser(req: Request, res: Response, next: NextFunction){
	const user = req.body
	let token = ''
	user.new ?
		await userService.signup(user.email, user.password, next)
	:
		token = await userService.login(user.email, user.password, next)
		
	res.status(user.new ? 201 : 200).send(token)
}