import React from 'react'

import { Nav } from './styled'

export default function Header() {
    return (
        <Nav>
            <div>
                <h1>
                    <a href='/'>Controle de Estoque</a>
                </h1>
                <button>Fazer Login</button>
            </div>
        </Nav>
    )
}