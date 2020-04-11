module.exports = {
  etvas: [require('./etvas/purchase')],
  own: [
    require('./own/welcome'),
    require('./own/customer'),
    require('./own/validateToken'),
  ],
}
