import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'

const ButtonStyled = styled(Button)`
  background-color: #000;
  color: #fff;
  border: none;
  font-size: 1.3rem;
  
  &:hover{
    background-color: #12664f;
    color: #f0f3f5;
    box-shadow: 5px 10px #386fa4; 
  }
`

const Main = styled.div`
  text-align: center;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  margin: 1rem;
  padding: 0.5rem;
`

const InputStyled = styled(Form.Control)`
  font-size: 1.2rem;
  margin-left: 2rem;
  margin-right: 2rem;
`


export const Login = () => {
  return (
    <Main>
      <h2>Entrar</h2>
      <p>Não tem uma conta? Acesse <a href="#">aqui</a></p>
      <FormStyled>
        <InputStyled type="email" placeholder="Digite seu email" required />
        <InputStyled type="password" placeholder="Digite sua senha" required />
        <ButtonStyled type="submit">
          Entrar
        </ButtonStyled>
      </FormStyled>
    </Main>
  )
}