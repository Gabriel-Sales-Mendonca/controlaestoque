import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import axios from '../../services/axios'
import { Container, FormNewCategory, Table } from './styled'


export default function Products() {
    const [products, setProducts] = useState([])
    const [newProduct, setNewProduct] = useState(false)
    const [updateProducts, setUpdateProducts] = useState(0)
    const [name, setName] = useState('')
    const [categoryId, setCategoryId] = useState(0)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        async function getData() {
            const response = await axios.get('/products')
            console.log(response.data)
            setProducts(response.data)
        }

        getData()
    }, [updateProducts])

    function addProduct(e) {
        e.preventDefault()
        setNewProduct(true)
    }

    function cancelAddProduct(e) {
        e.preventDefault()
        setNewProduct(false)
    }

    async function handleSubmit(e) {
        e.preventDefault()

        let formErrors = false

        if(!name) {
            formErrors = true
            toast.error('NOME não informado')
        }

        if(!categoryId) {
            formErrors = true
            toast.error('ID DA CATEGORIA não informado')
        }

        if(categoryId < 0) {
            formErrors = true
            toast.error('ID DA CATEGORIA inválido')
        }

        if(name.length < 3 || name.length > 30) {
            formErrors = true
            toast.error('O NOME deve ter entre 2 e 31 caracteres')
        }

        if(price < 0) {
            formErrors = true
            toast.error('PREÇO inválido')
        }

        if(formErrors) return

        try {
            const response = await axios.post('/products', {
                name: name,
                categoryId: Number(categoryId),
                price: Number(price)
            })

            setUpdateProducts(prev => prev + 1)
            toast.success(`Produto ${response.data.name} criado!`)
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

    async function hadleDelete(e, productId) {
        e.preventDefault()

        try {
            const response = await axios.request({
                method: 'delete',
                url: '/products',
                data: {
                    id: Number(productId)
                }
            })

            setUpdateProducts(prev => prev + 1)
            toast.success(response.data)
        } catch(e) {
            console.log('Houve um erro ' + e)
        }
    }

    return (
        <Container>
            <h1>Produtos</h1>

            <div>
                <button className='createCategory' onClick={addProduct}>Novo Produto</button>
            </div>

            {newProduct ? (
                <div>
                    <FormNewCategory onSubmit={handleSubmit}>
                        <label htmlFor='name'>NOME: </label>
                        <input type='text' id='name' name='name' onChange={(e) => {setName(e.target.value)}} />

                        <label htmlFor='id'>ID DA CATEGORIA: </label>
                        <input type='number' id='id' name='id' onChange={(e) => {setCategoryId(e.target.value)}} />

                        <label htmlFor='id'>PREÇO: </label>
                        <input type='number' id='id' name='id' onChange={(e) => {setPrice(e.target.value)}} />

                        <button type='submit'>Criar</button>
                        <button className='button-red' onClick={cancelAddProduct}>Cancelar</button>
                    </FormNewCategory>
                </div>
            ) : null}

            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>ID DA CATEGORIA</th>
                            <th>PREÇO</th>
                            <th>ATUALIZAR</th>
                            <th>DELETAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.categoryId}</td>
                                <td>{`R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</td>
                                <td><button>Editar</button></td>
                                <td><button type='submit' className='button-red' onClick={(e) => hadleDelete(e, product.id)} >Deletar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}