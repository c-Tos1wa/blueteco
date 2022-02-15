import { Form, Button, FormControl } from 'react-bootstrap'
import styled from 'styled-components'

const ButtonStyled = styled(Button)`
  background-color: #12664f;
  color: #f0f3f5;
  border: none;
  font-size: 1.3rem;
  
  &:hover{
    background-color: #12664f;
    color: #f0f3f5;
    border: none;
    box-shadow: 5px 10px #696969; 
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

export const Login = () => {
  return (
    <Main>
      <h2>Entrar</h2>
      <p>Não tem uma conta? Acesse <a href="/criar_conta">aqui</a></p>
      <FormStyled>
        <Form.Control type="email" placeholder="Digite seu email" required />
        <Form.Control type="password" placeholder="Digite sua senha" required />
        <ButtonStyled type="submit">
          Login
        </ButtonStyled>
      </FormStyled>
    </Main>
  )
}