import * as userRepository from '../repositories/userRepository.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { NextFunction } from 'express'

export async function signup(email: string, password: string, next:NextFunction){
	const user = await userRepository.verifyUser(email)
	if(user) next({type: 409, message: 'user already exists'})
	const hashedPassword = bcrypt.hashSync(password, 5)
	await userRepository.createUser(email, hashedPassword)
}

export async function login(email: string, password: string, next: NextFunction){
	const user = await userRepository.verifyUser(email)
	if(!user) next({type: 404, message: 'user not found'})

	const pwCheck = bcrypt.compareSync(password, user.password)
	if(!pwCheck) next({type: 401, message: 'wrong password'})

	const token = jwt.sign(email, process.env.JWT_SECRET)
	return token
}