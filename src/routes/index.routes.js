import { Router } from 'express'
import { postCalcular, postOrdenar } from '../controllers/index.controllers.js'
const indexRouter = Router()

indexRouter.post('/calcular', postCalcular)
indexRouter.post('/ordenar', postOrdenar)

export default indexRouter
