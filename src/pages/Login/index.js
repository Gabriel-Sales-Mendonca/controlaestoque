import { useState } from 'react'
import { isEmail } from 'validator'
import { toast } from 'react-toastify'

import { Form } from './styled'
import axios from '../../services/axios'

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        let formErrors = false

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
            const user = await axios.post('/tokens', {
                email: email,
                password: password
            })

            localStorage.setItem('userToken', user.data.token)

            window.location.href = '/'
            toast.success('Você Logou com SUCESSO!')
        } catch(e) {
            console.log('Houve um erro ' + e)
            
            if(e.response) {
                if(e.response.data.error) {
                    return toast.error(e.response.data.error)
                }
                
                toast.error('Houve um erro')
            }
        }
    }

    return (
        <div className='centralizer'>
            <h1>Faça seu Login</h1>
            <Form className='form-container'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={(e) => {setEmail(e.target.value)}} />
                    
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" onChange={(e) => {setPassword(e.target.value)}} />

                    <button type='submit'>Logar</button>
                </form>
            </Form>
        </div>
    )
}