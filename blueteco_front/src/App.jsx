import { useRoutes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { Products } from './pages/Products'


function App() {
  let routing = useRoutes([
    {
      path: '/',
      element: <Home />,  
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/criar_conta',
      element: <SignUp />
    },
    {
      path: '/produtos',
      element: <Products />
    }
  ]);

  return routing;
}

export default App
