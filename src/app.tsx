import React from 'react'
import ReactDOM from 'react-dom'
import { Grid, GridItemProps } from './components/Grid'
import './style/index.scss'

const packs: GridItemProps[] = []
for (let i = 0; i < 10; i++) {
  packs.push({
    name: `Pack ${i}`,
    thumbnailUrl: 'img/example.jpg',
    price: 120,
    inStock: true
  })
}

ReactDOM.render(<Grid packs={packs} />, document.querySelector('#root'))
