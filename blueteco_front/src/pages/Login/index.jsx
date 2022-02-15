import { Form, Button, FormControl } from 'react-bootstrap'
import styled from 'styled-components'

const ButtonStyled = styled(Button)`
  background-color: #12664f;
  color: #f0f3f5;
  border: none;
  font-size: 1.1rem;
  margin: 1rem 10rem;
  
  &:hover{
    background-color: #12664f;
    color: #f0f3f5;
    border: none;
    box-shadow: 5px 10px #696969; 
  }
`

const Main = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Login = () => {
  return (
    <Main>
      <h2>Entrar</h2>
      <p>Não tem uma conta? Acesse <a href="/criar_conta">aqui</a></p>
      <Form>
        <Form.Group>
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="Digite seu email cadastrado" required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Digite sua senha" required/>
        </Form.Group>
        <ButtonStyled type="submit">
          Login
        </ButtonStyled>
      </Form>
    </Main>
  )
}