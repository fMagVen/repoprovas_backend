import { Request, Response } from "express";
import * as testsService from "../services/testsService.js";

export async function getTestsByTerm(_: Request, res: Response){
	const tests = await testsService.testsByTerm()
	res.status(200).send(tests)
}

export async function getTestsByTeacher(_:Request, res: Response){
	const tests = await testsService.testsByTeacher()
	res.status(200).send(tests)
}