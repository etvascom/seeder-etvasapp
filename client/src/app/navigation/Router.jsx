import React from 'react'
import { Router, Redirect } from '@reach/router'
import styled from 'styled-components'
import { themed } from '@kogaio/utils'

import { NotFound, Overview, Support } from '../screens'

const AppRouter = props => (
  <Wrapper id='router-wrapper'>
    <Router primary={false} {...props}>
      <Overview path='/overview' />
      <Support path='/support' />
      <Redirect from='/' to='/overview' noThrow />
      <NotFound default />
    </Router>
  </Wrapper>
)

const Wrapper = styled.div`
  ${themed('Router.wrapper')};
`

export default AppRouter
