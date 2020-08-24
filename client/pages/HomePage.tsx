import React, { FunctionComponent } from 'react'
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom'
import { PackDetails } from 'pages'
import { Grid, Banner, Footer, About } from 'components'

const GridPage: FunctionComponent = () => <div>
  <Banner />
  <Grid />
  <Footer />
</div>

const HomePage: FunctionComponent = () => {
  const match = useRouteMatch()
  return <Switch>
    <Route path={`${match.path}:slug`}>
      <PackDetails />
    </Route>
    <Route path={match.path}>
      <GridPage />
    </Route>
  </Switch>
}

export { HomePage }
