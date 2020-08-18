import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import server from './gql'
import { config } from 'dotenv'

// Import env vars from .env file
config()

/**
 * Create an express instance and apply middleware
 */
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Serve static files
app.use(express.static(path.join(__dirname, '..', 'public')))
const port: number = typeof process.env.SERVERPORT !== 'undefined' ? parseInt(process.env.SERVERPORT, 10) : 8080

// Add Express app
server.applyMiddleware({ app })

app.listen(port, () => console.log(`Lily Packs listening on port ${port}`))
