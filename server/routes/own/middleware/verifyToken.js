const client = require('../../../etvas/client')

module.exports = async (req, res, next) => {
  if (!req.bearerToken) {
    return res.status(401).json({
      error: true,
      code: 'UNAUTHORIZED',
      status: 403,
      message: 'Missing bearer token',
    })
  }

  try {
    // The customer profile:
    const customerProfile = await client(req.bearerToken).getCustomerProfile()
    req.customerProfile = customerProfile
    next()
  } catch (err) {
    return res.status(401).json({
      error: true,
      code: 'UNAUTHORIZED',
      status: 401,
      message: 'Invalid token',
      details: err,
    })
  }
}
