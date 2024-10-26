import { Router } from 'express'
import { postCalcular } from '../controllers/index.controllers.js'
const indexRouter = Router()

indexRouter.post('/calcular', postCalcular)

export default indexRouter
