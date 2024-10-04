import { useState, useEffect } from 'react'
import { FaEdit, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

import axios from '../../services/axios'
import { Container, Table } from './styled'


export default function Stock() {
    const [products, setProducts] = useState([])
    const [productClicked, setProductClicked] = useState(null)
    const [novoValor, setNovoValor] = useState(0)

    useEffect(() => {
        async function getData() {
            const response = await axios.get('/products')

            setProducts(response.data)
        }

        getData()
    }, [])

    function handleEditClick(productId) {
        setProductClicked(productId)
    }

    function handleCancelEdit() {
        setProductClicked(null)
    }

    function valor(value) {
        return value
    }

    function newValue(amount) {
        console.log(amount)
    }

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

                                <td className='amount'>
                                    <input 
                                        value={valor(product.amount)}
                                        disabled={productClicked !== product.id}
                                        onChange={newValue(product.amount)}
                                    />

                                    {productClicked === product.id ? (
                                        <>
                                            <FaCheckCircle onClick={() => handleEditClick(product.id)} />
                                            <FaTimesCircle onClick={() => handleCancelEdit()} />
                                        </>
                                    ) : (
                                        <FaEdit onClick={(e) => handleEditClick(product.id)} />
                                    )}
                                </td>
                                <td>{product.amountUpdatedAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}