import React from 'react'

import {Nav} from './styled'

export default function Menu () {
    return (
        <Nav className='menu'>
            <div className='title'>
                <h1>Menu</h1>
            </div>

            <ul>
                <li>
                    <p>Produtos</p>
                </li>
                <li>
                    <p>Categorias</p>
                </li>
                <li>
                    <p>Estoque</p>
                </li>
            </ul>
        </Nav>
    )
}