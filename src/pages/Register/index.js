import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { isEmail } from 'validator'

import { Form } from './styled'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        let formErrors = false

        if(name.length < 3 || name.length > 30) {
            formErrors = true
            toast.error('NOME deve ter entre 2 e 31 caracteres')
        }

        if(!isEmail(email)) {
            formErrors = true
            toast.error('EMAIL inválido')
        }

        if(password.length < 5 || password.length > 64) {
            formErrors = true
            toast.error('A SENHA deve ter entre 4 e 65 caracteres')
        }
    }
    return (
        <div className='centralizer'>
            <h1>Cadastre-se</h1>
            <h4>ou experimente a plataforma sem cadastro <a href='/experimental'>aqui</a></h4>
            <Form>
                <form onSubmit={handleSubmit}>
                    <label for="name">Nome:</label>
                    <input type="text" id="name" name="name" onChange={(e) => {setName(e.target.value)}}/>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={(e) => {setEmail(e.target.value)}}/>
                    
                    <label for="password">Senha:</label>
                    <input type="password" id="password" name="password" onChange={(e) => {setPassword(e.target.value)}}/>

                    <button type='submit'>Cadastrar</button>
                </form>
            </Form>
        </div>
    )
}