import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { isEmail } from 'validator'
import { useNavigate } from 'react-router-dom'

import { Form } from './styled'
import axios from '../../services/axios'

export default function Register() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
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

        if(formErrors) return

        try {
            const user = await axios.post('/users', {
                name: name,
                email: email,
                password: password
            })

            if(user.data.errors) {
                user.data.errors.map((error) => {
                    return toast.error(error)
                })

                return
            }

            navigate('/')

            toast.success('Cadastro realizado com SUCESSO')
        } catch(e) {
            console.log('Houve um erro ' + e)
        }
    }
    return (
        <div className='centralizer'>
            <h1>Cadastre-se</h1>
            <h4>ou experimente a plataforma sem cadastro <a href='/experimental'>aqui</a></h4>
            <Form>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" onChange={(e) => {setName(e.target.value)}}/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={(e) => {setEmail(e.target.value)}}/>
                    
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" onChange={(e) => {setPassword(e.target.value)}}/>

                    <button type='submit'>Cadastrar</button>
                </form>
            </Form>
        </div>
    )
}