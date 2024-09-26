import { Form } from './styled'

export default function Register() {
    return (
        <div className='centralizer'>
            <h1>Cadastre-se</h1>
            <h4>ou experimente a plataforma sem cadastro <a href='/experimental'>aqui</a></h4>
            <Form className='form-container'>
                <form>
                    <label for="name">Nome:</label>
                    <input type="text" id="name" name="name"/>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email"/>
                    
                    <label for="password">Senha:</label>
                    <input type="password" id="password" name="password"/>

                    <button type='submit'>Cadastrar</button>
                </form>
            </Form>
        </div>
    )
}