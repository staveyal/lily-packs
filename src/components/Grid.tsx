import React, { FunctionComponent } from 'react'

export interface GridItemProps {
  readonly name: string // The name of the pack
  readonly thumbnailUrl: string // The URL for the thumbnail picture of the pack
  readonly price: number // Price in shekels
  readonly inStock: boolean // Is the pack in stock
}

/**
 * Component code for the items inside the grid of the packs
 */
const GridItem: FunctionComponent<GridItemProps> =
({ name, thumbnailUrl, price, inStock }: GridItemProps) =>
  <a className='grid-item'>
    <img src={thumbnailUrl} alt={name} />
    <p>{name}</p>
  </a>

interface GridProps {
  readonly packs: GridItemProps[]
}

/**
 * Grid for the packs
 */
const Grid: FunctionComponent<GridProps> = ({ packs }: GridProps) =>
  <div className='grid'>
    { packs.map(pack => <GridItem key={pack.name} {...pack} />)}
  </div>

export { Grid, GridItem }
