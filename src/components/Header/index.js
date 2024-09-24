import React from 'react'
import { Link } from 'react-router-dom'

import { Nav } from './styled'

export default function Header() {
    return (
        <Nav>
            <div>
                <h1>
                    <Link to={'/'}>Controle de Estoque</Link>
                </h1>
                <button>Fazer Login</button>
            </div>
        </Nav>
    )
}