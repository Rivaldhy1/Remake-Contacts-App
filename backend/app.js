import express from 'express'
import connectDB from './config/index.js'
import cors from 'cors'
import routes from './routes/api/contacts.js'
import bodyParser from 'body-parser'

const app = express()

app.use(cors({ origin: true, credentials: true }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/contacts', routes)

connectDB()

const port = process.env.PORT || 8082
app.listen(port, () => console.log(`Server running on port ${port}`))
