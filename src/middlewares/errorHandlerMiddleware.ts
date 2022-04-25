import { Request, Response, NextFunction } from 'express'

interface Error {
	type: number,
	message: string
}

export default function errorHandler(err:Error, req: Request, res: Response, next: NextFunction){
	if(err.type) res.status(err.type).send(err.message)
	else res.status(500).send(err)
}