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

// Force SSL in production
if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    // Check in the request headers if the protocol is HTTPS
    if (req.protocol !== 'https') {
      // Redirect to HTTPS by parsing HTTP request parameters: host header, url
      res.redirect(['https://', req.get('Host'), req.url].join(''))
      res.end()
    }
  })
}
// Serve static files
app.use(express.static(publicPath))
// Frontend routing
app.get('/*', (req, res) => res.sendFile(path.join(publicPath, 'index.html')))

/**
 * Define a port for the web server
 * See if an enviorenment variable exists, if not set it to 8080
 */
const port: number = typeof process.env.PORT !== 'undefined' ? parseInt(process.env.PORT, 10) : 8080

// Start the server
app.listen(port, () => console.log(`Lily Packs listening on port ${port}`))
