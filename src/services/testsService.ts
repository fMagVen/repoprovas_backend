import * as testsRepository from "../repositories/testsRepository.js"

export async function testsByTerm(){
	const tests = await testsRepository.getTestsByTerm()
	return tests
}

export async function testsByTeacher(){
	const tests = await testsRepository.getTestsByTeacher()
	return tests
}