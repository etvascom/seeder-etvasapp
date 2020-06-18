import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Box, IntegrationHeader } from '@etvas/etvaskit'

import { NavContext } from './NavProvider'
import { Overview, Support } from '../screens'
import { NavMenu } from './NavMenu'

const AppRouter = () => {
  return (
    <Box p={1}>
      <IntegrationHeader
        title='Hello Etvas'
        providerName='etvas'
        providerPrefix='By'
        url='https://etvas.com'
      />
      <NavMenu />

      <View component={Overview} path='overview' />
      <View component={Support} path='support' />
    </Box>
  )
}

const View = ({ component: Component, path }) => {
  const { currentView, changeView } = useContext(NavContext)
  if (!currentView.includes(path)) return null
  return <Component changeView={changeView} currentView={currentView} />
}

View.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string
}

export default AppRouter
