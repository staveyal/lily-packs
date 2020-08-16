import React from 'react'
import ReactDOM from 'react-dom'
import { Grid } from './components/Grid'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './style/index.scss'

/**
 * Initialising the Apollo client
 */
const port: number = typeof process.env.SERVERPORT !== 'undefined' ? parseInt(process.env.SERVERPORT, 10) : 8080
const client = new ApolloClient({
  uri: `http://localhost:${port}/graphql`,
  cache: new InMemoryCache()
})

ReactDOM.render(<ApolloProvider client={client}>
  <Grid />
</ApolloProvider>, document.querySelector('#root'))
