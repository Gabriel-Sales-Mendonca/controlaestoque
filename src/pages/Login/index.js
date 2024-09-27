import { Form } from './styled'

export default function Register() {
    return (
        <div className='centralizer'>
            <h1>Faça seu Login</h1>
            <Form className='form-container'>
                <form action=''>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email"/>
                    
                    <label for="password">Senha:</label>
                    <input type="password" id="password" name="password"/>

                    <button type='submit'>Logar</button>
                </form>
            </Form>
        </div>
    )
}