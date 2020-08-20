import { ApolloServer, gql } from 'apollo-server-express'
import { createConnection, getVisiblePacks } from './db'

createConnection()

/**
 * GraphQL type definitions
 */
const typeDefs = gql`
  type Pack {
    id: ID!,
    name: String,
    thumbnailUrl: String,
    price: Int,
    show: Boolean,
    slug: String,
    desc: String
  }

  type Query {
    Packs: [Pack!]!
  }
`

const resolvers = {
  Query: {
    Packs: async () => getVisiblePacks().then(res =>
      res.sort((a, b) => a.place === 0 || b.place === 0 ? 1 : a.place - b.place)
        .map(pack => ({
          id: pack.id,
          name: pack.name,
          thumbnailUrl: pack.img,
          price: pack.price,
          slug: pack.slug,
          desc: pack.specs
        })))
  }
}

// Apollo server
export default new ApolloServer({
  typeDefs,
  resolvers
})
