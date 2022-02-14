import styled from 'styled-components'
import { 
  FaFacebookSquare, 
  FaGithub, 
  FaInstagramSquare, 
  FaLinkedin, 
  FaSnapchatSquare,
  FaTwitterSquare,
  FaTripadvisor,
  FaYoutubeSquare
 } from "react-icons/fa";

 const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
 `

 const SocialMedia = styled.div`
    font-size: 2rem;
    color: #000;
 `

const PersonalCredentials = styled.div`
  padding-top: 0.5rem;
`

export const FooterStyled = () => {
  return (
    <Main>
    <SocialMedia>
      <FaFacebookSquare />
      <FaInstagramSquare />
      <FaSnapchatSquare />
      <FaTwitterSquare />
      <FaTripadvisor />
      <FaYoutubeSquare />
    </SocialMedia>
      
      <PersonalCredentials>
        Criado por Cristina T. Iwassaki
        <a href="https://github.com/c-Tos1wa/blueteco" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/cristina-iwassaki/">
          <FaLinkedin />
        </a>
      </PersonalCredentials>
    </Main>
  )
}