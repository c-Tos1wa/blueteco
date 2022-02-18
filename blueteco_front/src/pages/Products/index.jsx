import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Card, Button, Row, Col } from 'react-bootstrap'





export const Products = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get('/menu')
      .then((res) => {
        setMenu(res.data)
      })
  }, [])

  return (
    <div>
      <h3>Veja nosso cardápio</h3>  
      
        {
          menu.map((items) => (
            <a href={`/produtos`} key={items.id}>
              <Card>
              <Card.Body>
                <Card.Img variant='top' src={items.imageUrl} />
                <Card.Text>
                  {items.name}
                  {items.price}
                </Card.Text>
              </Card.Body>
              </Card>
            </a>
          ))
        }

    
    </div>
  )
}