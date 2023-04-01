import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3500/',
  withCredentials: true,
  headers: {
    Accept: 'application/json, text/plain, */*',
  },
})

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.accesToken
    config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
