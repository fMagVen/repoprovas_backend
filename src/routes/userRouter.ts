import { Router } from "express";
import signUser from "../controllers/userController.js";
import validateSchema from "../middlewares/validateSchemaMiddleware.js";
import { signupLoginSchema } from "../schemas/userSchemas.js";

const userRouter = Router()

userRouter.post('/signuser', validateSchema(signupLoginSchema), signUser)

export default userRouter