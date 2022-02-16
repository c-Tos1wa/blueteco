import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { MenuBar } from './components/MenuBar'
// import { FooterStyled } from './components/FooterPart'
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.headers.post['Content-Type'] = 'application/json'

import { GlobalStyle } from './styles/global'

ReactDOM.render(
  <React.StrictMode>
  <GlobalStyle />
    <MenuBar />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <FooterStyled /> */}
  </React.StrictMode>,
  document.getElementById('root')
)
