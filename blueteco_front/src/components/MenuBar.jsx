import { Navbar, Container, Nav } from 'react-bootstrap'
import Logo from '../assets/beer-logo.ico'


export const MenuBar = () => {
  return(
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src={Logo}
          width="35"
          height="35"
        />
      Blueteco
      </Navbar.Brand>
      <Nav>
        <Nav.Link href="/criar_conta">Criar Conta</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}