const etvas = require('@etvas/etvas-sdk')
const { bearer } = require('./middleware')

module.exports = {
  method: 'get',
  url: '/validate-token',
  middleware: [bearer],
  handler: async ({ bearerToken }) => etvas.client(bearerToken).validate(),
}
