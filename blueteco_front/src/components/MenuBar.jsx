import { Navbar, Container, Nav } from 'react-bootstrap'
import styled from 'styled-components'
import Logo from '../assets/beer-logo.ico'



export const MenuBar = () => {
  return(
    <Navbar bg="dark" variant="dark">
    <Container fixed>
      <Navbar.Brand href="/">
        <img
          alt=""
          src={Logo}
          width="30"
          height="30"
        />
      Blueteco
      </Navbar.Brand>
      <Nav>
        <Nav.Link href="/criar_conta">Criar Conta</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href='/perfil'>Perfil</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}