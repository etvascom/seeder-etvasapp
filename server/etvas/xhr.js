const axios = require('axios')
const config = require('./config')

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

if (config.API_KEY && config.API_KEY_HEADER) {
  headers[config.API_KEY_HEADER] = config.API_KEY
}

const xhr = axios.create({
  baseURL: config.REST_URI,
  timeout: 5000,
  headers,
})

module.exports = xhr
