const xhr = require('./xhr')

const getCommonHeaders = bearer => ({
  Authorization: bearer.startsWith('Bearer ') ? bearer.substr(7) : bearer
})

module.exports = bearer => ({
  getCustomerProfile: async () => {
    const response = await xhr.get('/users/profile', {
      headers: getCommonHeaders(bearer)
    })
    return response.data
  },
  validateToken: async () => {
    const response = await xhr.get('/token/verify', {
      headers: getCommonHeaders(bearer)
    })
    return response && response.data && response.data === 'OK'
  },
  getExternalData: async () => {
    const response = await xhr.get('/products/external-data', {
      headers: getCommonHeaders(bearer)
    })
    if (response && response.data && response.data.data) {
      return JSON.parse(response.data.data)
    }
    return null
  },
  putExternalData: async data => {
    const payload = data ? { data: JSON.stringify(data) } : { data: '' }
    await xhr.put('/products/external-data', payload, {
      headers: getCommonHeaders(bearer)
    })
    return true
  }
})
