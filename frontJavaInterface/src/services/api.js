import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api-rest-poo-87efb0c54160.herokuapp.com'
})