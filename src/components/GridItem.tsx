import * as React from 'react'

interface GridItemProps {
  readonly name: string
  readonly thumbnailUrl: string
  readonly price: number
  readonly inStock: boolean
}

const GridItem: React.FunctionComponent<GridItemProps> = ({ name, thumbnailUrl, price, inStock }: GridItemProps) => {
  return <a className='gridItem'>
    <img src={thumbnailUrl} alt={name} />
    <p>{name}</p>
  </a>
}

export default GridItem
