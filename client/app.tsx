import React from 'react'
import { render } from 'react-dom'
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
const client = new ApolloClient({
  uri: `${window.location.href}graphql`,
  cache: new InMemoryCache()
})

render(<Router>
  <ApolloProvider client={client}>
    <Switch>
      <Route path='/'>
        <HomePage />
      </Route>
    </Switch>
  </ApolloProvider>
</Router>, document.querySelector('#root'))
