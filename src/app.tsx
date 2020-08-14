import React from 'react'
import ReactDOM from 'react-dom'
import { GridItem } from './components/Grid'
import './style/grid.scss'

ReactDOM.render(<GridItem thumbnailUrl='img/example.jpg' name='pack' price={120} inStock />,
  document.querySelector('#root'))
