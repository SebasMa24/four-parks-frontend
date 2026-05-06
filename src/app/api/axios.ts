import axios from 'axios'

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true
})

export default instance
