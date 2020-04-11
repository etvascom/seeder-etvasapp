import React from 'react'
import ReactDOM from 'react-dom'
import Root from './app/Root'
import * as serviceWorker from './serviceWorker'
import { getQueryVars } from '@shared/funcs'

persistToken()

ReactDOM.render(<Root />, document.getElementById('root'))

serviceWorker.unregister()

function persistToken(name = 'token') {
  const qs = getQueryVars(window.location.search)
  if (qs[name]) {
    sessionStorage.setItem(name, qs[name])
  }
}
