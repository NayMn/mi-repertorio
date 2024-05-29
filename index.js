import express from 'express'
import 'dotenv/config'
const app = express()

// leer req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// archivos estaticos
const __dirname = import.meta.dirname
app.use(express.static(__dirname + '/public'))

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('servidor escuchando...')
})