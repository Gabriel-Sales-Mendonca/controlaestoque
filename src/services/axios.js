import axios from 'axios'

export default axios.create({
    baseURL: 'https://api-controla-estoque.vercel.app/'
})