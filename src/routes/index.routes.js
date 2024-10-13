import { Router } from 'express'
import { postAgenda } from '../controllers/index.controllers.js'
const indexRouter = Router()

indexRouter.post('/', postAgenda)

export default indexRouter
