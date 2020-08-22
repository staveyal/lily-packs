import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './style/index.scss'

/**
 * Initialising the Apollo client
 */
const port: number = typeof process.env.PORT !== 'undefined' ? parseInt(process.env.PORT, 10) : 8080
const client = new ApolloClient({
  uri: `http://localhost:${port}/graphql`,
  cache: new InMemoryCache()
})

ReactDOM.render(<Router>
  <ApolloProvider client={client}>
    <Switch>
      <Route path='/'>
        <HomePage />
      </Route>
    </Switch>
  </ApolloProvider>
</Router>, document.querySelector('#root'))
