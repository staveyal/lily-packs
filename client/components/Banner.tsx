import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Image for the banner
// The aspect ratio is detemined by the height since the width is 100%
const BannerImage = styled.div`
  background-image: url('/img/banner.jpg');
  background-color: #000;
  width: 100%;
  height: 20vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 2rem;
  @media only screen and (max-width: 1200px) {
    height: 30vw;
  }
  @media only screen and (max-width: 768px){
    height: 40vw;
  }
`

// A gradient with an absolute position to dark the image
const BannerGradient = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.23), transparent 100%)
`

// The icon that appears in the middle of the banner
const LilyIcon = styled.img`
  position: absolute;
  top: -1vw;
  left: calc(50% - 12.5vw);
  height: 25vw;
  width: 25vw;
  z-index: 3;
  box-shadow: -1.5px 1.5px 5px #666;
  border-radius: 22px;
  @media only screen and (max-width: 1200px) {
    /* position: absolute;
    top: 5vh;
    left: calc(50% - 7.5vw);
    height: 25vw;
    width: 25vw;
    z-index: 3; */
    position: absolute;
    top: 1vh;
    left: calc(50% - 15vw);
    height: 30vw;
    width: 30vw;
    z-index: 3;
  }
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 1vh;
    left: calc(50% - 20vw);
    height: 40vw;
    width: 40vw;
    z-index: 3
  }
`

// The underline for the icon
// const Underline = styled.div`
//   position: absolute;
//   top: 2rem;
//   left: 50%;
//   z-index: 2;
//   height: 1.5rem;
//   width: 30vw;
// `

const BannerSection = styled.section`
position: relative;
`

const Banner: FunctionComponent = () => <Link to='/'>
  <BannerSection>
    <BannerGradient />
    <BannerImage>
      <LilyIcon src='/img/logo-white.png'/>
    </BannerImage>
  </BannerSection>
</Link>

export { Banner }
