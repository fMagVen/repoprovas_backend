import express from 'express'
import cors from 'cors'
import errorHandler from './middlewares/errorHandlerMiddleware.js'
import router from './routes/index.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)
app.use(errorHandler)

export default app