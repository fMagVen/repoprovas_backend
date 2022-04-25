import { Request, Response, NextFunction } from 'express'
import * as userRepository from '../repositories/userRepository.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export default async function handleAuth(req: Request, res: Response, next: NextFunction){
	const auth = req.headers.authorization?.replace('Bearer ','')
	if(!auth) next({type: 401, message: 'session not found, please login'})
	let checkAuth
	try{
		checkAuth = jwt.verify(auth, process.env.JWT_SECRET)
	}catch{
		next({type: 401, message: 'bad token'})
	}
	const user = await userRepository.verifyUser(checkAuth)
	if(!user) next({type: 401, message: 'auth token tampered with'})
	next()
}