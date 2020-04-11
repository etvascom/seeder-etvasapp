const config = require('../../../etvas/config')

module.exports = async (req, res, next) => {
  const apiKey = req.get(config.API_KEY_HEADER)
  if (apiKey !== config.API_KEY) {
    return res.status(403).json({
      error: true,
      code: 'INVALID_API_KEY',
      message: 'API Key invalid'
    })
  }
  next()
}
