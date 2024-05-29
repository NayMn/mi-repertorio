import express from 'express'
import 'dotenv/config'
import router from './routes/repertorio.route.js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(__dirname + '/public'))

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('servidor escuchando...')
})