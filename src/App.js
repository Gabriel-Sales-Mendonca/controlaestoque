import { RouterProvider} from 'react-router-dom'

import router from './routes'
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
