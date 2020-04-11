const axios = require('axios')

const client = axios.create({
  baseURL: process.env.REACT_APP_BACKEND || '/api/'
})

client.interceptors.request.use(config => {
  const token = sessionStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
}, Promise.reject)

module.exports = client
