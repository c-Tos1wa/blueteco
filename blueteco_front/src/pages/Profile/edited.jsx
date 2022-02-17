import{ useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';



export const Edited = () => {
  let navigate = useNavigate();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [ocupation, setOcupation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()

    axios.patch('/user', )

  }
  


  return (
    <h2>Alterar Perfil do Usuário</h2>
  )
}