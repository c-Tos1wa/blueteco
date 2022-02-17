import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

const ButtonStyled = styled(Button)`
  background-color: #12664f;
  color: #f0f3f5;
  border: none;
  font-size: 1.2rem;
  margin: 10px 0;

  &:hover{
    background-color: #12664f;
    color: #f0f3f5;
    border: none;
    box-shadow: 5px 10px #696969; 
  }
`
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SignUp = () => {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [imageUrl, setImageUrl] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [ocupation, setOcupation] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    const createdUser = {
      name,
      lastName,
      email,
      password,
      confirmPassword,
      imageUrl,
      birthDate: new Date(birthDate).toJSON(),
      ocupation
    }
  
    axios.post('/user', createdUser)
    .then(
      (response) => {
        console.log(response.statusText);
        navigate('/login')
        })
      .catch(
        (error) => {
          alert(error.response.data.message)
        })
  }
  
  return (
    <Main>
      <h3>Criar conta</h3>
      <p>Já tem uma conta? Acesse <a href="/login">aqui</a></p>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Label>Nome</Form.Label>
            <Form.Control 
              placeholder="Digite o nome"
              onChange={(e) => setName(e.target.value)}  
            />
          </Col>
          <Col>
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control 
              placeholder=" Digite o sobrenome"
              onChange={(e) => setLastName(e.target.value)} 
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Foto de Perfil</Form.Label>
            <Form.Control 
              placeholder='Insira o link da foto de perfil' 
              onChange={(e) => setImageUrl(e.target.value)}  
            />
          </Col>
          <Col>
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control 
              type="date"
              onChange={(e) => setBirthDate(e.target.value)} 
            />
          </Col>
        </Row>
        <Form.Group>
          <Form.Label>Função</Form.Label>
          <Form.Control 
            placeholder='Digite a função'
            onChange={(e) => setOcupation(e.target.value)} 
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>E-mail</Form.Label>
          <Form.Control 
            placeholder='Digite o email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Row>
          <Col>
            <Form.Label>Senha</Form.Label>
            <Form.Control 
              type="password"
              onChange={(e) => setPassword(e.target.value)} 
            />
          </Col>
          <Col>
            <Form.Label>Confirme a senha</Form.Label>
            <Form.Control 
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Col>
        </Row>
        <ButtonStyled type="submit">Criar</ButtonStyled>
      </Form>
    </Main>
  )
}