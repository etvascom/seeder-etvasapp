const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const proxy = require('./routes/utils/proxy')

require('./boot')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))

const etvasRouter = express.Router()
const ownRouter = express.Router()

const createRouter = route => {
  const router = express.Router()
  if (route.middleware) {
    router[route.method](route.url, route.middleware, proxy(route))
  } else {
    router[route.method](route.url, proxy(route))
  }
  return router
}

routes.etvas.forEach(route => {
  const router = createRouter(route)
  etvasRouter.use('/', router)
})

routes.own.forEach(route => {
  const router = createRouter(route)
  ownRouter.use('/', router)
})

if (process.env.NODE_ENV === 'production') {
  app.use('/etvas', etvasRouter)
  app.use('/', ownRouter)
} else {
  app.use((req, res, next) => {
    console.info(`${req.method}: ${req.url}`)
    next()
  })
  app.use('/api/etvas', etvasRouter)
  app.use('/api', ownRouter)
}

app.listen(port, () => console.info('Server started on port', port))
