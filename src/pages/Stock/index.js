import { useState, useEffect } from 'react'
import { FaEdit, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import { toast } from 'react-toastify'

import axios from '../../services/axios'
import { Container, Table } from './styled'


export default function Stock() {
    const [products, setProducts] = useState([])
    const [productClicked, setProductClicked] = useState(null)
    const [oldQuantity, setOldQuatity] = useState([])
    const [updatedStock, setUpdatedStock] = useState(0)

    useEffect(() => {
        async function getData() {
            const response = await axios.get('/products')

            setProducts(response.data)
        }

        getData()
    }, [updatedStock])

    function handleEdit(productId) {
        const copyProducts = products.map(product => ({ ...product }))       
        setOldQuatity(copyProducts)

        setProductClicked(productId)
    }

    function handleCancelEdit() {
        setProducts(oldQuantity)

        setProductClicked(null)
    }

    function handleChangeAmount(productId, amount) {
        const updateProducts = products.map((product) => {
            if(product.id === productId) {
                product.amount = amount
            }
            return product
        })

        setProducts(updateProducts)
    }

    async function handleSubmit(productId) {
        for(let product of products) {
            if(product.id === productId) {
                try {
                    const response = await axios.put('/products/amount', {
                        id: Number(productId),
                        amount: Number(product.amount)
                    })
    
                    console.log(response)
                    toast.success(`Produto ${response.data.name} atualizado!`)

                } catch(e) {
                    toast.error('Houve um erro')
                    console.log('Houve um erro ' + e)
                }
            }
        }

        setUpdatedStock(prev => prev + 1)
        setProductClicked(null)
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
                                        value={product.amount}
                                        disabled={productClicked !== product.id}
                                        onChange={(e) => handleChangeAmount(product.id, e.target.value)}
                                    />

                                    {productClicked === product.id ? (
                                        <>
                                            <FaCheckCircle onClick={() => handleSubmit(product.id)} />
                                            <FaTimesCircle onClick={() => handleCancelEdit()} />
                                        </>
                                    ) : (
                                        <FaEdit onClick={(e) => handleEdit(product.id)} />
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