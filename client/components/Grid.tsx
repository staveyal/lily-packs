import React, { FunctionComponent } from 'react'
import { useQuery, gql, QueryResult } from '@apollo/client'
import styled from 'styled-components'

/**
 * The GraphQL query for retrieving packs from the server
 */
const PACKS = gql`
  query Packs {
  Packs {
    id
    desc
    name
    thumbnailUrl
    price
    show
    slug
  }
}
`
interface PacksData {
  Packs: Pack[]
}

export interface Pack {
  readonly id: number
  readonly desc: string
  readonly name: string // The name of the pack
  readonly thumbnailUrl: string // The URL for the thumbnail picture of the pack
  readonly price: number
  readonly show: boolean // Is the pack in stock
  readonly slug: string
}

const GridLink = styled.a`
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: calc(33.33333% - 2rem);
  display: flex;
  flex-direction: column;
  font-size: larger;
  box-sizing: border-box;
  text-align: center;
  margin: 0 1rem;
  margin-bottom: 2.2rem;
  @media only screen and (max-width: 1200px) {
    flex-basis: calc(33% - 1.2rem);
    margin: 0 0.6rem;
    margin-bottom: 2.2rem;
    font-size: larger;
  }
  @media only screen and (max-width: 768px) {
    flex-basis: calc(50% - 1rem);
    margin: 0 0.5rem;
    margin-bottom: 2.2rem;
    font-size: medium;
  }
`

const Title = styled.p`
  font-weight: 600;
  margin-top: 1rem;
`
const Thumbnail = styled.div<{ src: string }>`
  background-image: url(${props => props.src || '/img/banner.jpg'});
  background-color: #000;
  width: 100%;
  height: 15vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 768px) {
    height: 40vw;
  }
`

/**
 * Component code for the items inside the grid of the packs
 */
const GridItem: FunctionComponent<Pack> =
({ name, thumbnailUrl }: Pack) =>
  <GridLink>
    <Thumbnail src={thumbnailUrl} />
    <Title>{name}</Title>
  </GridLink>

const FlexBox = styled.section`
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
  if (loading) return <div>בטעינה...</div>
  if (error) return <div>Error</div>
  if (typeof data !== 'undefined') {
    return <FlexBox>
      { data.Packs.map(pack => <GridItem key={pack.name} {...pack} />)}
    </FlexBox>
  } else return <div>Big Error</div>
}

export { Grid, GridItem }
