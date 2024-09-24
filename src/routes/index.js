import { createBrowserRouter } from 'react-router-dom'

import Menu from '../components/Menu'
import Header from '../components/Header'
import Error from '../pages/Error'
import Products from '../pages/Products'
import Categories from '../pages/Categories'

const router = createBrowserRouter([
    {
        path: '/',
        element:
            <div className='main'>
                <Header />
                <Menu />
            </div>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Products />
            },
            {
                path: 'categories',
                element: <Categories />
            }
        ]
    }
])

export default router