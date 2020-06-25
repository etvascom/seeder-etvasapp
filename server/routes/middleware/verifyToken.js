const etvas = require('@etvas/etvas-sdk')

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
    const customerProfile = await etvas
      .client(req.bearerToken)
      .getCustomerProfile()
    req.customerProfile = customerProfile
    next()
  } catch (err) {
    return res.status(401).json({
      error: true,
      code: 'UNAUTHORIZED',
      status: 401,
      message: 'Invalid tokens',
      details: err,
    })
  }
}
