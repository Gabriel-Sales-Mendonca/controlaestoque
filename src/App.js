import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header';
import Menu from './components/Menu'
import GlobalStyles from './styles/GlobalStyles';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div className='content'>Hello world!</div>,
    errorElement: <div className='content'>Pagina de erro</div>
  },

  {
    path: '/teste1',
    element: <h2>Teste 1</h2>
  }
])

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <div className='container'>
        <Menu />
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
