const client = require('../../etvas/client')
const { bearer } = require('./middleware')

module.exports = {
  method: 'get',
  url: '/validate-token',
  middleware: [bearer],
  handler: ({ bearerToken }) => client(bearerToken).validateToken(),
}
