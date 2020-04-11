const { verifyApiKey, validatePurchaseParameters } = require('./middleware')

module.exports = {
  method: 'post',
  url: '/purchase',
  middleware: [verifyApiKey, validatePurchaseParameters],
  handler: async ({ body: { userId } }) => {
    // The argument is the user id from ETVAS Database
    console.log('Received User ID', userId)
    return true
  },
}
