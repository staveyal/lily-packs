import React, { FunctionComponent } from 'react'
import { useQuery, gql, QueryResult } from '@apollo/client'
import styled from 'styled-components'

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

const GridLink = styled.a`
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: calc(33.33333% - 1.6rem);
  display: flex;
  flex-direction: column;
  font-size: medium;
  box-sizing: border-box;
  text-align: center;
  margin: 0 0.8rem;
  margin-bottom: 2.2rem;
  @media only screen and (max-width: 768px) {
    flex-basis: calc(50% - 1rem);
    margin: 0 0.5rem;
  }
`

const Title = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin-top: 1rem;
`
const Thumbnail = styled.img`
  height: auto;
  width: 100%;
`
/**
 * Component code for the items inside the grid of the packs
 */
const GridItem: FunctionComponent<Pack> =
({ name, thumbnailUrl, price, inStock }: Pack) =>
  <GridLink>
    <Thumbnail src={thumbnailUrl} />
    <Title>{name}</Title>
  </GridLink>

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  width: 85%;
  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`

/**
 * Grid for the packs
 */
const Grid: FunctionComponent = () => {
  const { loading, error, data }: QueryResult<PacksData> = useQuery(PACKS)
  if (loading) return <div>Loading</div>
  if (error) return <div>Error</div>
  if (typeof data !== 'undefined') {
    return <FlexBox>
      { data.packs.map(pack => <GridItem key={pack.name} {...pack} />)}
    </FlexBox>
  } else return <div>Big Error</div>
}

export { Grid, GridItem }
