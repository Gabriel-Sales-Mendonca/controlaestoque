import { createBrowserRouter } from 'react-router-dom'

import Header from '../components/Header'
import Menu from '../components/Menu'
import Error from '../pages/Error'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Products from '../pages/Products'
import Categories from '../pages/Categories'
import Stock from '../pages/Stock'

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
            },
            {
                path: 'stock',
                element: <Stock />
            }
        ]
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'register',
        element: <Register />
    }
])

export default router