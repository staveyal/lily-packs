import React, { FunctionComponent } from 'react'
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom'
// import { PackDetails } from './PackDetails'
import { Grid } from '../components/Grid'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'

const GridPage: FunctionComponent = () => <div>
  <Banner />
  <Grid />
  <Footer />
</div>

const HomePage: FunctionComponent = () => {
  const match = useRouteMatch()
  return <Switch>
    {/* <Route path={`${match.path}/:pack`}>
      <PackDetails />
    </Route> */}
    <Route path={match.path}>
      <GridPage />
    </Route>
  </Switch>
}

export { HomePage }
