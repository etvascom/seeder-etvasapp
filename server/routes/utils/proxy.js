module.exports = route => async (req, res) => {
  try {
    const response = await route.handler(req)
    if (response === true) {
      return res.status(route.status || 200).json({ success: true })
    }
    return res.status(route.status || 200).json(response)
  } catch (err) {
    const status =
      err.response && err.response.status ? err.response.status : 500
    return res.status(status).json({ error: true, message: err.message })
  }
}
