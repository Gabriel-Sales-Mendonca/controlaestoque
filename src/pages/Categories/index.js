import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import axios from '../../services/axios'
import { Container, Table } from './styled'

export default function Categories() {
    const [categories, setCategories] = useState([])

    const [newCategory, setNewCategory] = useState(false)
    const [id, setId] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        async function getData() {
            const response = await axios.get('/categories')

            setCategories(response.data)
        }

        getData()
    }, [])

    function addCategory(e) {
        e.preventDefault()
        setNewCategory(true)
    }

    function cancelAddCategory(e) {
        e.preventDefault()
        setNewCategory(false)
    }

    async function handleSubmit(e) {
        e.preventDefault()

        let formErrors = false

        if(!id) {
            formErrors = true
            toast.error('ID não informado')
        }

        if(id < 0) {
            formErrors = true
            toast.error('ID inválido')
        }

        if(!name) {
            formErrors = true
            toast.error('NOME não informado')
        }

        if(name.length < 3 || name.length > 30) {
            formErrors = true
            toast.error('O NOME deve ter entre 2 e 31 caracteres')
        }

        if(formErrors) return

        try {
            const response = await axios.post('/categories', {
                id: Number(id),
                name: name
            })

            console.log(response)
            toast.success(`Categoria ${response.data.name} criada!`)
        } catch(e) {
            console.log('Houve um erro ' + e)


            if(e.response) {
                if(e.response.data.error) {
                    e.response.data.error.map((err) => {
                        return toast.error(err)
                    })

                    return
                }
                
                toast.error('Houve um erro')
            }
        }
    }

    async function hadleDelete(e, categoryId) {
        e.preventDefault()

        try {
            const response = await axios.request({
                method: 'delete',
                url: '/categories',
                data: {
                    id: Number(categoryId)
                }
            })

            toast.success(response.data)
        } catch(e) {
            console.log('Houve um erro ' + e)
        }
    }

    return (
        <Container>
            <h1>Categorias</h1>

            <div>
                <button className='createCategory' onClick={addCategory}>Nova Categoria</button>
            </div>

            {newCategory ? (
                <div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='id'>ID: </label>
                        <input type='number' id='id' name='id' onChange={(e) => {setId(e.target.value)}} />

                        <label htmlFor='name'>NOME: </label>
                        <input type='text' id='name' name='name' onChange={(e) => {setName(e.target.value)}} />

                        <button type='submit'>Criar</button>
                        <button onClick={cancelAddCategory}>Cancelar</button>
                    </form>
                </div>
            ) : null}

            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>ATUALIZAR</th>
                            <th>DELETAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, index) => (
                            <tr key={category.id}>
                                <td>{category.id}</td>
                                <td>{category.name}</td>
                                <td><button>Editar</button></td>
                                <td><button type='submit' onClick={(e) => hadleDelete(e, category.id)} >Deletar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}