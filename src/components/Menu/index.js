import React from 'react'
import { Outlet, Link } from 'react-router-dom'

import {Nav} from './styled'

export default function Menu () {
    return (
        <>
            <Nav className='menu'>
                <div className='title'>
                    <h1>Menu</h1>
                </div>

                <ul>
                    <li>
                        <Link to={`products`}>Produtos</Link>
                    </li>
                    <li>
                        <Link to={`categories`}>Categorias</Link>
                    </li>
                    <li>
                        <Link to={`stock`}>Estoque</Link>
                    </li>
                </ul>
            </Nav>
            <div className='content'>
                <Outlet />
            </div>
        </>
    )
}