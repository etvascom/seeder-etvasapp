module.exports = {
  apps: [
    {
      name: 'server',
      cwd: 'server',
      script: 'server.js',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        PORT: 5000,
        NODE_ENV: 'production'
      }
    }
  ]
}
