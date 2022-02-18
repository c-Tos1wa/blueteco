import{ useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components';
import { Button, Form, Row, Col } from 'react-bootstrap';

const EditArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  padding: 1.5rem;
`



export const Edited = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [ocupation, setOcupation] = useState('');
  // const [alteredUser, setAlteredUser] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()

    const alteredUser = {
      name,
      lastName,
      email,
      imageUrl,
      birthDate,
      ocupation,
    }

    const token = localStorage.token;

    axios.patch('/user', alteredUser, {
      headers: { Authorization: `Bearer ${token}` }  
    })
    .then((res) => {
      setName('');
      setLastName('');
      setEmail('');
      setImageUrl('');
      setBirthDate('');
      setOcupation('');
    })
      .catch(
        (error) => {
          alert(error.response.data.message)
        })
    
  }

  return (
    <EditArea>
      <h2>Alterar Perfil do Usuário</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Label>Nome</Form.Label>
            <Form.Control 
              placeholder='Digite seu nome'
              onChange={(e) => setName(e.target.value)}  
            />
          </Col>
          <Col>
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control 
              placeholder='Digite seu sobrenome'
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
        <Button type='submit'>Alterar</Button>
        </Form>
    </EditArea>
  )
}