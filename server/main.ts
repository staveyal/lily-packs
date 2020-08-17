import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import { config } from 'dotenv'
import { ApolloServer, gql } from 'apollo-server-express'

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

interface pack {
  readonly name: string,
  readonly price: number,
  readonly thumbnailUrl: string,
  readonly inStock: boolean
}

/**
 * GraphQL type definitions
 */
const typeDefs = gql`
  type Pack {
    name: String,
    thumbnailUrl: String,
    price: Int,
    inStock: Boolean
  }

  type Query {
    packs: [Pack]
  }
`

// Mock data
const packs: pack[] = []
for (let i = 0; i < 11; i++) {
  packs.push({
    name: `חבילה מס ${i}`,
    thumbnailUrl: '/img/example.jpg',
    inStock: true,
    price: Math.floor(Math.random() * 3 + 1) * 120
  })
}

const resolvers = {
  Query: {
    packs: () => packs
  }
}

// Apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers
})

// Add Express app
server.applyMiddleware({ app })

app.listen(port, () => console.log(`Lily Packs listening on port ${port}`))
