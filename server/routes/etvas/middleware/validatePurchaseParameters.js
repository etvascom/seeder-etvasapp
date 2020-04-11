module.exports = async (req, res, next) => {
  if (!req.body.userId) {
    return res.status(422).json({
      error: true,
      code: 'VALIDATION_ERROR',
      message: 'Missing userId'
    })
  }
  next()
}
