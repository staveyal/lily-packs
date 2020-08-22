import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import server from './gql'
import { config } from 'dotenv'

// Import env vars from .env file
config()
const publicPath = path.join(__dirname, '..', 'public')
/**
 * Create an express instance and apply middleware
 */
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Add Express app
server.applyMiddleware({ app })

// Serve static files
app.use(express.static(publicPath))
// Frontend routing
app.get('/*', (req, res) => res.sendFile(path.join(publicPath, 'index.html')))

/**
 * Define a port for the web server
 * See if an enviorenment variable exists, if not set it to 8080
 */
const port: number = typeof process.env.SERVERPORT !== 'undefined' ? parseInt(process.env.SERVERPORT, 10) : 8080

// Start the server
app.listen(port, () => console.log(`Lily Packs listening on port ${port}`))
