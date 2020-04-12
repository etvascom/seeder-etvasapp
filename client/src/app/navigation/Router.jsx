import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { NavContext } from './NavProvider'
import { Overview, Support } from '../screens'

const AppRouter = () => {
  return (
    <Page>
      <View component={Overview} path='overview' />
      <View component={Support} path='support' />
    </Page>
  )
}

const Page = styled.div`
  height: 100vh;
`

const View = ({ component: Component, path }) => {
  const { currentView, changeView } = useContext(NavContext)
  if (!currentView.includes(path)) return null
  return <Component changeView={changeView} currentView={currentView} />
}

View.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string,
}

export default AppRouter
