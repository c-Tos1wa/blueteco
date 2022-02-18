import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { Toast, ToastContainer, Button } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { Edited } from './edited'

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
  margin: 1.5rem;

  img{
    border-radius:100%;
    width: 10%;
  }
`

const Anchor = styled.div`
  text-align: end;
  margin: 1.5rem;

  &:hover{
    font-size: 1.05rem;
  }
`

const NotLoggedIn = styled(ToastContainer)`
  margin: 5rem 0;
`;

export const Profile = () => {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

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

  return(
    <>
      {
        loggedIn ? (
          <>
          <ProfileData>
            <h2>Perfil do Usuário</h2>
            <img src={user.imageUrl} />
            <h3>{`${user.name} ${user.lastName}`}</h3>
            <Info>
              <p>Ajudando o Blueteco como {user.ocupation}</p>
              <p>Festa de Aniversário em {user.birthDate}</p>
              <p>Sócio desde {user.createdAt}</p>
            </Info>
            <div>
              <Link to='/editar_perfil'>
                <Button variant='warning'>Editar</Button>
              </Link> 
            </div>
          </ProfileData>
          <Anchor>
            <Link to='/produtos'>
              Veja nossos produtos <BsArrowRight />
            </Link>
          </Anchor>
          </>
        ) : (
          <NotLoggedIn position='top-center'>
            <Toast>
              <Toast.Body>
                Para acessar esta área, faça login!!
              </Toast.Body>
              <Anchor>
                <Link to='/login'>
                  Ir para o Login <BsArrowRight />
                </Link>
              </Anchor>
            </Toast>
          </NotLoggedIn>
        )
      }
    </>
  )
}