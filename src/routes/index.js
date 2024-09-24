import { createBrowserRouter } from 'react-router-dom'

import Menu from '../components/Menu'
import Error from '../pages/Error'
import Products from '../pages/Products'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Menu />,
        errorElement: <Error />,
        children: [
            {
                path: 'products',
                element: <Products />
            }
        ]
    }
])

export default router