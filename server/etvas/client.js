const xhr = require('./xhr')

const _cleanupBearer = bearer =>
  bearer.startsWith('Bearer ') ? bearer.substr(7) : bearer

module.exports = bearer => ({
  getCustomerProfile: async () => {
    const response = await xhr.get('/users/profile', {
      headers: {
        Authorization: _cleanupBearer(bearer),
      },
    })
    return response.data
  },
  validateToken: async () => {
    const response = await xhr.get('/token/verify', {
      headers: {
        Authorization: _cleanupBearer(bearer),
      },
    })
    return response && response.data && response.data === 'OK'
  },
})
