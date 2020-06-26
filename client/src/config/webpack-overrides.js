const path = require('path')
const { paths } = require('react-app-rewired')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  webpack: function(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@shared': path.resolve(paths.appPath, `${paths.appSrc}/shared`),
      '@config': path.resolve(paths.appPath, `${paths.appSrc}/config`),
      '@assets': path.resolve(paths.appPath, `${paths.appSrc}/assets`),
      app: path.resolve(paths.appPath, `${paths.appSrc}/app`)
    }

    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: 'src/shared/i18n/dictionaries/*.json',
            to: 'static/i18n',
            flatten: true
          }
        ]
      })
    )
    return config
  }
}
