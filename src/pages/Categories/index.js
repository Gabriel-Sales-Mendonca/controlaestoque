import { useState, useEffect } from 'react'

import axios from '../../services/axios'
import { Table } from './styled'

export default function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await axios.get('/categories')

            console.log(response)

            setCategories(response.data)
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
                        {categories.map((category, index) => (
                            <tr key={category.id}>
                                <td>{category.id}</td>
                                <td>{category.name}</td>
                                <td><button>Editar</button></td>
                                <td><button>Deletar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}