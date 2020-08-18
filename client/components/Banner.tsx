import styled from 'styled-components'

const Banner = styled.div`
  background-image: url('/img/banner.jpg');
  background-color: #000;
  width: 100%;
  height: 20vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 2rem;
  @media only screen and (max-width: 768px){
    height: 40vw;
  }
`

export { Banner }
