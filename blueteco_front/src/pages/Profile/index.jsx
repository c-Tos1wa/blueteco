import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Modal, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Info = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  align-items: center;
`

const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  img{
    border-radius:100%;
    width: 10%;
  }
`


export const Profile = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleClose = () => setShow(false)

  useEffect(() => {
    const token = localStorage.token;

    if(!token){
      setLoggedIn(false);
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    axios.get('/auth', config)
      .then((response) => {
        setLoggedIn(true)
        setUser(response.data)     
      })
  }, [loggedIn]);

  const logout = () => {
    localStorage.clear();
    navigate('/')
  }


  return(
    <>
      {
        loggedIn && (
          <ProfileData>
            <h2>Perfil do Usuário</h2>
            <img src={user.imageUrl} />
            <h3>{`${user.name} ${user.lastName}`}</h3>
            <Info>
              <p>Ajudando o Blueteco como {user.ocupation}</p>
              <p>Festa de Aniversário em {user.birthDate}</p>
              <p>Sócio desde {user.createdAt}</p>
            </Info>
            <Button onClick={logout}>Sair</Button>
          </ProfileData>
        )
      }
      {
        showError && 
        (
          <Modal
          show={show}
          onHide={handleClose}
          backdrop='static'
          keyboard={false}
        >
        <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            Uh oh... Para acessar esta área você precisa ter feito login!
          </Modal.Body>
          <Modal.Footer>
            <Button variant='dark' onClick={handleClose}>Fechar</Button>
            <Button href='/login'>Vai pro Login!</Button>
          </Modal.Footer>
        </Modal>
        )
      }
    </>
  )
}