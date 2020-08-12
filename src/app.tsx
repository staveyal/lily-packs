import * as React from 'react'
import * as ReactDOM from 'react-dom'
// @ts-ignore
import GridItem from './components/GridItem.tsx'
import './style/grid.scss'

ReactDOM.render(<GridItem thumbnailUrl='img/example.jpg' name='pack' price={120} inStock />,
  document.querySelector('#root'))
