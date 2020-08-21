import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaPhoneAlt } from 'react-icons/fa'
import { GrFacebook } from 'react-icons/gr'
import React, { FunctionComponent } from 'react'

const FooterContainer = styled.section`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 5rem;
  padding: 0.5rem;
  background-color: white;
  border-top: solid 0.1rem grey;
  margin-top: 5rem;
`
const Desc = styled.p`
  width: 50%;
  font-size: medium;
`

const Icons = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  margin: 0 0.6rem;
  svg {
    margin: 0 0.6rem;
  }
`

const ContentPusher = styled.div`
  position: absolute;
  height: 6.5rem;
  width: 100%;
`

const Footer: FunctionComponent = () => <section> <FooterContainer>
  <IconContext.Provider value={{ size: '2.5rem' }} >
    <Icons>
      <a href='https://wa.me/972507400155'> <IoLogoWhatsapp color='#009688' /> </a>
      <a href='tel:+972-50-740-0155'><FaPhoneAlt color='black' /></a>
      <a href='https://www.facebook.com/lilypacks1/'><GrFacebook color='blue' /></a>
      <Desc>למכירה צרו קשר עם לילי באמצעי התקשורת השונים</Desc>
    </Icons>
  </IconContext.Provider>
</FooterContainer>
<ContentPusher />
</section>

export { Footer }
