import React from 'react'
import { Outlet, Link } from 'react-router-dom'

import {Nav} from './styled'

export default function Menu () {
    return (
        <div className='container'>
            <Nav className='menu'>
                <div className='title'>
                    <h1>Menu</h1>
                </div>

                <ul>
                    <Link to={`/`}>
                        <li>
                            <span>Produtos</span>
                        </li>
                    </Link>
                    <Link to={`categories`}>
                        <li>
                            <span>Categorias</span>
                        </li>
                    </Link>
                    <Link to={`stock`}>
                        <li>
                            <span>Estoque</span>
                        </li>
                    </Link>
                </ul>
            </Nav>
            <div className='content'>
                <Outlet />
            </div>
        </div>
    )
}