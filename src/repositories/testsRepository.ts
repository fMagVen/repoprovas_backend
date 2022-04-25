import client from "../prisma/dbConnectionSetup.js";

export function getTestsByTerm(){
	const tests = client.terms.findMany({
		include:{
			disciplines:{
				include:{
					teachers:{
						include:{
							teacher:{
								select:{
									name:true
								}
							},
							tests:{
								include:{
									category:{
										select:{
											name: true
										}
									}
								}
							}
						}
					}
				}
			}
		}
	})
	return tests
}

export function getTestsByTeacher(){
	const tests = client.teachers.findMany({
		include:{
			disciplines:{
				include:{
					discipline:{
						include:{
							term: true
						}
					},
					tests:{
						include:{
							category: true
						}
					}
				}
			}
		}
	})
	return tests
}