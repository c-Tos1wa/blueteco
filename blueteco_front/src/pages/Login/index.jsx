import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
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
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const loggedUser = {
      email, password
    }

    navigate('/perfil')

    axios.post('/auth', loggedUser)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem('token', token)
        console.log(response.statusText)
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  }
  

  return (
    <Main>
      <h2>Entrar</h2>
      <p>Não tem uma conta? Acesse <a href="/criar_conta">aqui</a></p>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>E-mail</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Digite seu email cadastrado" 
            required
            onChange = {(event) => setEmail(event.target.value)}  
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Senha</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Digite sua senha" 
            required
            onChange = {(event) => setPassword(event.target.value)}
            
          />
        </Form.Group>
        <ButtonStyled type="submit">
          Login
        </ButtonStyled>
      </Form>
    </Main>
  )
}