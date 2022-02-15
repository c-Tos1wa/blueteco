import { Form, Button, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

const ButtonStyled = styled(Button)`
  background-color: #12664f;
  color: #f0f3f5;
  border: none;
  font-size: 1.2rem;

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
  return (
    <Main>
      <h3>Criar conta</h3>
      <p>Já tem uma conta? Acesse <a href="/login">aqui</a></p>

      <Form>
        <Row>
          <Col>
            <Form.Label>Nome</Form.Label>
            <Form.Control placeholder="nome" />
          </Col>
          <Col>
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control placeholder="sobrenome" />
          </Col>
        </Row>
        <Form.Group>
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Função</Form.Label>
          <Form.Control type='text' />
        </Form.Group>
        <Form.Group>
          <Form.Label>E-mail</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group>
          <Form.Label>Foto de Perfil</Form.Label>
          <Form.Control placeholder='Insira o link da foto de perfil' />
        </Form.Group>
        <Row>
          <Col>
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" />
          </Col>
          <Col>
            <Form.Label>Confirme a senha</Form.Label>
            <Form.Control type="password" />
          </Col>
        </Row>
        <ButtonStyled type="submit">
          Criar
        </ButtonStyled>
      </Form>
    </Main>
  )
}