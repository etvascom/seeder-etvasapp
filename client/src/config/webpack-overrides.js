const path = require('path')
const { paths } = require('react-app-rewired')

module.exports = {
  webpack: function(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@shared': path.resolve(paths.appPath, `${paths.appSrc}/shared`),
      '@config': path.resolve(paths.appPath, `${paths.appSrc}/config`),
      '@assets': path.resolve(paths.appPath, `${paths.appSrc}/assets`),
      app: path.resolve(paths.appPath, `${paths.appSrc}/app`)
    }
    return config
  }
}
