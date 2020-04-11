module.exports = async (req, res, next) => {
  let token = req.get('authorization')
  if (!token) {
    token = req.body._api_token
  }
  if (!token) {
    token = req.query._api_token
  }

  if (token && token.substr(0, 7) === 'Bearer') {
    token = token.substr(7)
  }

  if (token) {
    req.bearerToken = token
  }
  next()
}
