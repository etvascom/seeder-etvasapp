const pak = require('../../package.json')

module.exports = {
  method: 'get',
  url: '/',
  handler: () => ({ name: pak.name, version: pak.version }),
}
