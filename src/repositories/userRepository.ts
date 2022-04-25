import client from "../prisma/dbConnectionSetup.js"

export async function verifyUser(email: string){
	const user = await client.users.findUnique({
		where: {
			email
		}
	})
	return user
}

export async function verifyToken(token: string){
	const loggedUser = await client.sessions.findFirst({
		where: {
			token
		},
		include: {
			user: true
		}
	})
	return loggedUser
}

export async function createUser(email: string, password: string){
	await client.users.create({
		data: {
			email,
			password
		}
	})
}

export async function createSession(userId: number, token: string){
	await client.sessions.create({
		data: {
			userId,
			token
		}
	})
}