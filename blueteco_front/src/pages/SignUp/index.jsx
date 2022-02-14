import { Form, Button } from 'react-bootstrap'
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
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.7rem;
`

const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  padding: 0.5rem;
`

export const SignUp = () => {
  return (
    <Main>
      <h2>Criar conta</h2>
      <p>Já tem uma conta? Acesse <a href="#">aqui</a></p>
      <FormStyled>
        <Form.Control type="text" placeholder="Digite seu nome" required/>
        <Form.Control type="text" placeholder="Digite seu sobrenome" required/>
        <Form.Control type="text" placeholder="Digite sua data de nascimento" required/>
        <Form.Control type="text" placeholder="Digite sua ocupação" required/>
        <Form.Control type="email" placeholder="Digite seu email" required />
        <Form.Control type="password" placeholder="Digite sua senha" required />
        <Form.Control type="password" placeholder="Confirme sua senha" required />
        <ButtonStyled type="submit">
          Entrar
        </ButtonStyled>
      </FormStyled>
    </Main>
  )
}