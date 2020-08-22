import { ApolloServer, gql } from 'apollo-server-express'
import {
  createConnection,
  getVisiblePacks,
  getPackDetails
} from './db'

createConnection()

/**
 * GraphQL type definitions
 */
const typeDefs = gql`
  type Pack {
    id: ID!,
    name: String,
    img: String,
    price: Int,
    show: Boolean,
    slug: String,
    specs: String
  }

  type Query {
    packs: [Pack!]!,
    packDetails(slug: String!): Pack!
  }
`

const resolvers = {
  Query: {
    packs: async () => getVisiblePacks().then(res =>
      res.sort((a, b) => a.place === 0 || b.place === 0 ? 1 : a.place - b.place)),
    packDetails: async (_: any, args: any) => getPackDetails(args.slug)
  }
}

// Apollo server
export default new ApolloServer({
  typeDefs,
  resolvers
})
