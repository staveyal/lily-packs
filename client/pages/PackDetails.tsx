import React, { FunctionComponent } from 'react'
import { Banner, Footer } from 'components'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'

const Name = styled.h1`
  margin-bottom: 1rem;
`
const Details = styled.p`
  font-size: medium;
  white-space: pre;
`
const Price = styled.span`
  padding: 0.3rem;
  font-size: medium;
  font-weight: 600;
  color: white;
  background-color: #5def40;
  border-radius: 15%;
  margin: 0.5rem 0;
`
const PACK_DETAILS = gql`
  query GetPackDetails($slug: String!) {
    pack(slug: $slug) {
      id
      name
      price
      amount
      img
      specs
    }
  }
`
const Image = styled.img`
  float: left;
  width: 30%;
  margin-left: 2rem;
  @media only screen and (max-width: 768px) {
    width: 100%;
    float: none;
    margin: auto;
  }
`

const DetailSection = styled.section`
  padding: 0.3rem;
`

const PackDetails: FunctionComponent = () => {
  // Get pack slug from the URL
  const { slug } = useParams()
  // Get details about the pack from the database using the slug
  const { loading, error, data } = useQuery(PACK_DETAILS, { variables: { slug } })
  if (loading) return <p>בטעינה...</p>
  if (error) return <p>אירעה שגיאה</p>
  if (typeof data !== 'undefined') {
    const { name, price, img, specs } = data.pack
    return <div>
      <Banner />
      <DetailSection>
        <Name>{name}</Name>
        <Details>{specs}</Details>
        <Price>₪{price}</Price>
        <Image src={img} />
      </DetailSection>
      <Footer />
    </div>
  } else {
    return <p>אירעה שגיאה...</p>
  }
}

export { PackDetails }
