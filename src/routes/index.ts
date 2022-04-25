import userRouter from "./userRouter.js";
import testsRouter from "./testsRouter.js";
import { Router } from "express";

const router = Router()

router.use(userRouter)
router.use(testsRouter)

export default router