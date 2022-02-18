import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Card, Col, Row } from 'react-bootstrap'

const MenuArea = styled.div`
  padding: 0 2rem 0;
  text-align: center;

  & h3{
    padding: 1.5rem 0;
  }

`



export const Products = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get('/menu')
      .then((res) => {
        setMenu(res.data)
      })
  }, [])

  return (
    <MenuArea>
      <h3>Veja nosso cardápio</h3>  
      <Row xs={1} md={2} lg={4}>
        {
          menu.map((items) => (
            <a href={`/produtos/${items.id}`} key={items.id}>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Img variant='top' src={items.imageUrl} />
                    <Card.Title>
                      {items.name}
                    </Card.Title>
                      R${items.price}
                  </Card.Body>
                </Card>
              </Col>
            </a>
          ))
        }
        </Row>

    
    </MenuArea>
  )
}