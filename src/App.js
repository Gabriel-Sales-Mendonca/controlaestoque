import { RouterProvider} from 'react-router-dom'

import router from './routes'
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
