import React, { FunctionComponent } from 'react'
import { useQuery, gql, QueryResult } from '@apollo/client'

/**
 * The GraphQL query for retrieving packs from the server
 */
const PACKS = gql`
  query Packs {
    packs {
      name
      thumbnailUrl
      price
      inStock
    }
  }
`
interface PacksData {
  packs: Pack[]
}

export interface Pack {
  readonly name: string // The name of the pack
  readonly thumbnailUrl: string // The URL for the thumbnail picture of the pack
  readonly price: number // Price in shekels
  readonly inStock: boolean // Is the pack in stock
}

/**
 * Component code for the items inside the grid of the packs
 */
const GridItem: FunctionComponent<Pack> =
({ name, thumbnailUrl, price, inStock }: Pack) =>
  <a className='grid-item'>
    <img src={thumbnailUrl} alt={name} />
    <p>{name}</p>
  </a>

// interface GridProps {
//   readonly packs: Pack[]
// }

/**
 * Grid for the packs
 */
const Grid: FunctionComponent = () => {
  const { loading, error, data }: QueryResult<PacksData> = useQuery(PACKS)
  if (loading) return <div>Loading</div>
  if (error) return <div>Error</div>
  if (typeof data !== 'undefined') {
    return <div className='grid'>
      { data.packs.map(pack => <GridItem key={pack.name} {...pack} />)}
    </div>
  } else return <div>Big Error</div>
}

export { Grid, GridItem }
