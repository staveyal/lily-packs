import React, { FunctionComponent } from 'react'
import { Grid } from '../components/Grid'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'

const HomePage: FunctionComponent = () => <div>
  <Banner />
  <Grid />
  <Footer />
</div>

export { HomePage }
