import { createBrowserRouter } from 'react-router-dom'

import Header from '../components/Header'
import Menu from '../components/Menu'
import Error from '../pages/Error'
import Login from '../pages/Login'
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
    },

    {
        path: 'login',
        element: <Login />
    }
])

export default router