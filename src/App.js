import { RouterProvider} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import router from './routes'
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <ToastContainer autoClose={3000} className='toast-container' />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
