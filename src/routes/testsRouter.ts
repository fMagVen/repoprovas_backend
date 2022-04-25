import { Router } from "express";
import * as testsController from "../controllers/testsController.js";
import handleAuth from "../middlewares/authMiddleware.js";

const testsRouter = Router()

testsRouter.get('/tests/term', handleAuth, testsController.getTestsByTerm)
testsRouter.get('/tests/teacher', handleAuth, testsController.getTestsByTeacher)

export default testsRouter