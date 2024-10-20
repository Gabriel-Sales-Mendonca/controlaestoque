import { Link } from 'react-router-dom'

import { Container } from './styled'

export default function Home() {
    return (
        <Container>
            <div className='title'>
                <h1>Seja bem vindo ao seu controlador de estoque!</h1>
                <h2>Faça Login ou Cadastre-se</h2>
            </div>

            <div className='buttons'>
                <Link to={'/login'}>
                    <button>Fazer Login</button>
                </Link>
                <Link to={'/register'}>
                    <button>Cadastrar</button>
                </Link>
            </div>
        </Container>
    )
}