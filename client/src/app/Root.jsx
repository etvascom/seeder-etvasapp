import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { buildTheme } from '@etvas/etvaskit'

import appTheme from '@assets/theme'
import { GlobalStyle } from '@assets/GlobalStyle'
import Router from './navigation/Router'
import ApiProvider from './services/ApiProvider'
import NavProvider from './navigation/NavProvider'
import { AuthorizingOrUnauthorized } from './components'

const client = require('./services/client')

const Root = () => {
  const [authorizeData, setAuthorizeData] = useState({
    loading: true,
    isAuthorized: false,
  })

  const authorize = async () => {
    try {
      const {
        data: { success },
      } = await client.get('/validate-token')
      if (success) {
        setAuthorizeData({
          isAuthorized: true,
          loading: false,
        })
      }
    } catch (error) {
      setAuthorizeData({
        isAuthorized: false,
        loading: false,
      })
    }
  }

  useEffect(() => {
    authorize()
  }, [])

  const { loading, isAuthorized } = authorizeData

  return (
    <ThemeProvider theme={buildTheme(appTheme)}>
      {loading || !isAuthorized ? (
        <AuthorizingOrUnauthorized loading={loading} />
      ) : (
        <ApiProvider>
          <NavProvider>
            <GlobalStyle />
            <Router />
          </NavProvider>
        </ApiProvider>
      )}
    </ThemeProvider>
  )
}

export default Root
