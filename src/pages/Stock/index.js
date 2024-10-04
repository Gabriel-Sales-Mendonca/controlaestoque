import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import axios from '../../services/axios'
import { Container, Table } from './styled'


export default function Stock() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await axios.get('/products')
            console.log(response.data)
            setProducts(response.data)
        }

        getData()
    }, [])

    return (
        <Container>
            <h1>Estoque</h1>

            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>COD.</th>
                            <th>NOME</th>
                            <th>CATEGORIA</th>
                            <th>PREÇO</th>
                            <th>VALOR DO ESTOQUE</th>
                            <th>QUANTIDADE</th>
                            <th>ATUALIZADO EM</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.categoryId}</td>
                                <td>{`R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</td>
                                <td>{`R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</td>
                                <td>{product.amount}</td>
                                <td>{product.amountUpdatedAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}