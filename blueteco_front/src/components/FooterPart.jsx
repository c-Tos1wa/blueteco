import styled from 'styled-components'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

 const Main = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100vw;
 `

const PersonalCredentials = styled.div`
  padding-top: 0.2rem;
  color: #fff;
  display: flex;
  a{
    color: #fff;
    font-size: 1rem;
  }
`


export const FooterStyled = () => {
  return (
    <Main>
      <PersonalCredentials>
        Criado por Cristina T. Iwassaki
          <a href="https://github.com/c-Tos1wa" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/cristina-iwassaki/" target="_blank">
            <FaLinkedin />
          </a>
      </PersonalCredentials>
    </Main>
  )
}