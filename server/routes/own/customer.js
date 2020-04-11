const { bearer, verifyToken } = require('./middleware')

module.exports = {
  method: 'get',
  url: '/customer',
  middleware: [bearer, verifyToken],
  handler: ({ customerProfile }) => customerProfile,
}
