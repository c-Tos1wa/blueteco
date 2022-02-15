import { useRoutes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'


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
    }
  ]);

  return routing;
}

export default App
