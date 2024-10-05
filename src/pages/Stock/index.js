import { useState, useEffect } from 'react'
import { FaEdit, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import { toast } from 'react-toastify'

import axios from '../../services/axios'
import { Container, Table } from './styled'


export default function Stock() {
    const [products, setProducts] = useState([])
    const [productClicked, setProductClicked] = useState(null)
    const [oldQuantity, setOldQuantity] = useState([])
    const [updatedStock, setUpdatedStock] = useState(0)

    useEffect(() => {
        async function getData() {
            const response = await axios.get('/products')

            function formatDate(isoDate) {
                const date = new Date(isoDate)
                const day = String(date.getDate()).padStart(2, '0')
                const month = String(date.getMonth() + 1).padStart(2, '0')
                const year = date.getFullYear()
                const hours = String(date.getHours() + 3).padStart(2, '0')
                const minutes = String(date.getMinutes()).padStart(2, '0')
                const seconds = String(date.getSeconds()).padStart(2, '0')
            
                return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
            }

            let listOfProducts = []

            for(let product of response.data) {

                if(product.amountUpdatedAt) {
                    product.amountUpdatedAt = formatDate(product.amountUpdatedAt)
                }
                listOfProducts.push(product)
            }

            setProducts(listOfProducts)
        }

        getData()
    }, [updatedStock])

    function handleEdit(productId) {
        const copyProducts = products.map(product => ({ ...product }))       
        setOldQuantity(copyProducts)

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
                                        type='number'
                                        value={product.amount}
                                        disabled={productClicked !== product.id}
                                        onChange={(e) => handleChangeAmount(product.id, e.target.value)}
                                    />

                                    <div className='editAmount'>
                                        {productClicked === product.id ? (
                                            <>
                                                <FaCheckCircle className='edit check' size={25} onClick={() => handleSubmit(product.id)} />
                                                <FaTimesCircle className='edit cancel' size={25} onClick={() => handleCancelEdit()} />
                                            </>
                                        ) : (
                                            <FaEdit className='edit' size={25} onClick={(e) => handleEdit(product.id)} />
                                        )}
                                    </div>
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