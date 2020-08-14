import * as React from 'react'

interface GridItemProps {
  readonly name: string // The name of the pack
  readonly thumbnailUrl: string // The URL for the thumbnail picture of the pack
  readonly price: number // Price in shekels
  readonly inStock: boolean // Is the pack in stock
}

/**
 * Component code for the items inside the grid of the packs
 */
const GridItem: React.FunctionComponent<GridItemProps> =
({ name, thumbnailUrl, price, inStock }: GridItemProps) => {
  return <a className='gridItem'>
    <img src={thumbnailUrl} alt={name} />
    <p>{name}</p>
  </a>
}

export { GridItem }
