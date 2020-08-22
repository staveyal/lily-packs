import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'

const Name = styled.h1`
`
const Details = styled.p`
  font-size: medium;
`
const PACK_DETAILS = gql`
  query {
    pack {
      id
      name
      price
      amount
      img
      specs
    }
  }
`
