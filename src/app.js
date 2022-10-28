import express from 'express'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'

import __dirname from './utils.js'
import config from './config/config.js'

import viewsRouter from './routes/views.router.js'
import sessionsRouter from './routes/sessions.router.js'

const app = express()
const PORT = process.env.PORT || 8080
const connection = mongoose.connect(`mongodb+srv://${config.mongo.USER}:${config.mongo.PSW}@clusterprueba.fp95ssd.mongodb.net/${config.mongo.DB}?retryWrites=true&w=majority`)

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')

app.use(express.static(__dirname+'/public'))
app.use(express.json())

app.use('/',viewsRouter)
app.use('/api/sessions', sessionsRouter)

app.listen(PORT, ()=>console.log(`Listening on ${PORT} port`))
console.log(`mongodb+srv://${config.mongo.USER}:${config.mongo.PSW}@clusterprueba.fp95ssd.mongodb.net/${config.mongo.DB}?retryWrites=true&w=majority`)
