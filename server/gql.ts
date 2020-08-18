import { ApolloServer, gql } from 'apollo-server-express'

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
export default new ApolloServer({
  typeDefs,
  resolvers
})
