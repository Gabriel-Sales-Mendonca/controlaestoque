import { useState, useEffect } from 'react'

import axios from '../../services/axios'
import { Table } from './styled'

export default function Categories() {
    const [id, setId] = useState('')
    //const [name, setName] = useState('')

    useEffect(() => {
        async function getData() {
            const response = await axios.get('/categories',{
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
                }
            })

            console.log(response)

            setId(response.data[0].id)
        }

        getData()
    }, [])

    return (
        <>
            <h1>Categorias</h1>

            <div>
                <button>Nova Categoria</button>
            </div>

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
                        <tr>
                            <td>{id}</td>
                            <td>Exemplo 1</td>
                            <td>Atualizar</td>
                            <td>Deletar</td>
                        </tr>
                        <tr>
                            <td>{id}</td>
                            <td>Exemplo 2</td>
                            <td>Atualizar</td>
                            <td>Deletar</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}