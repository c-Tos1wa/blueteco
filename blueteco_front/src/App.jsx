import { useRoutes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { Products } from './pages/Products'
import { Profile } from './pages/Profile'


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
    },
    {
      path: '/perfil',
      element: <Profile />
    }
  ]);

  return routing;
}

export default App
