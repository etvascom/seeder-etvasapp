import React, {
  useCallback,
  createContext,
  useEffect,
  useState,
  useLayoutEffect,
} from 'react'
import PropTypes from 'prop-types'

const validViews = ['overview', 'support']

const NavProvider = ({ children }) => {
  const [history, updateHistory] = useState(() => {
    const { hash } = window.location
    if (hash && validViews.includes(hash.substr(1))) return [hash.substr(1)]
    return ['overview']
  })

  const changeView = useCallback(
    target => {
      if ([-1, '..', '../'].includes(target) && history.length > 1) {
        return updateHistory(oldHistory => oldHistory.slice(1))
      }

      if (validViews.includes(target) && history[0] !== target) {
        return updateHistory(oldHistory => [target, ...oldHistory])
      }
    },
    [history]
  )

  useLayoutEffect(() => {
    const { hash } = window.location
    if (!hash) window.location.hash = 'overview'
  }, [])

  useEffect(() => {
    window.addEventListener('hashchange', _handleHashChange)

    return () => {
      window.removeEventListener('hashchange', _handleHashChange)
    }

    function _handleHashChange(ev) {
      // eslint-disable-next-line no-unused-vars
      const [_, hash] = ev.newURL.split('#')
      if (hash && validViews.includes(hash)) changeView(hash)
    }
  }, [changeView, history])

  useEffect(() => {
    if (history.length > 50) {
      updateHistory(oldHistory =>
        oldHistory.slice(0, 10).concat(oldHistory.slice(40))
      )
    }
  }, [history.length])

  return (
    <NavContext.Provider
      value={{
        currentView: history[0],
        changeView,
        mayGoBack: history.length > 1,
        history: history.slice(0),
      }}>
      {children}
    </NavContext.Provider>
  )
}

export const NavContext = createContext({
  currentView: 'overview',
})

NavProvider.propTypes = {
  children: PropTypes.node,
}

export default NavProvider
