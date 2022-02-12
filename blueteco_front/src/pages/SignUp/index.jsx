import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'

const ButtonStyled = styled(Button)`
  background-color: #12664f;
  color: #f0f3f5;
  border: none;
  font-size: 1.3rem;
  
  &:hover{
    background-color: #000000;
    color: #fff;
    box-shadow: 5px 10px #696969; 
  }
`

const Main = styled.div`
  text-align: center;
  margin-top: 0.8rem;
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
  padding: 0.5rem;
`

const InputStyled = styled(Form.Control)`
  font-size: 1.2rem;
  margin-left: 2rem;
  margin-right: 2rem;
`

export const SignUp = () => {
  return (
    <Main>
      <h2>Criar conta</h2>
      <p>Já tem uma conta? Acesse <a href="#">aqui</a></p>
      <FormStyled>
        <InputStyled type="text" placeholder="Digite seu nome" required/>
        <InputStyled type="text" placeholder="Digite seu sobrenome" required/>
        <InputStyled type="text" placeholder="Digite sua data de nascimento" required/>
        <InputStyled type="text" placeholder="Digite sua ocupação" required/>
        <InputStyled type="email" placeholder="Digite seu email" required />
        <InputStyled type="password" placeholder="Digite sua senha" required />
        <InputStyled type="password" placeholder="Confirme sua senha" required />
        <ButtonStyled type="submit">
          Entrar
        </ButtonStyled>
      </FormStyled>
    </Main>
  )
}