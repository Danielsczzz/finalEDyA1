import express from 'express'
import cors from 'cors'
import indexRoutes from './routes/index.routes.js'

const app = express()

// configuracion app
app.set('port', 4000)
app.use(express.json())
app.use(cors())
app.use(express.static('./src/view'))

app.use(indexRoutes)

app.listen(app.get('port'), () => console.log(`servidor corriendo en: http://localhost:${app.get('port')}`))
