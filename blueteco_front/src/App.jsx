import { useRoutes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { Products } from './pages/Products'
import { Profile } from './pages/Profile'
import { Edited } from './pages/Profile/edited'
import { Individual } from './pages/Products/one'


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
    // {
    //   path: `/produtos/${items.id}`,
    //   element: <Individual />
    // },
    {
      path: '/perfil',
      element: <Profile />
    },
    {
      path: '/editar_perfil',
      element: <Edited />
    }
  ]);

  return routing;
}

export default App
