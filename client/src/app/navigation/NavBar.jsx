import React, { useContext } from 'react'
import styled from 'styled-components'

import { themed, themeGet, Flex, Icon, Anchor } from '@etvas/etvaskit'

import { appPaths } from 'app/constants'
import { NavContext } from './NavProvider'

console.log(themed, themeGet)

const NavBar = () => {
  const { currentView } = useContext(NavContext)

  const _isCurrentRoute = path => path.substr(1) === currentView

  return (
    <Navigation as='nav'>
      {appPaths.map(route => (
        <NavLink
          key={route.path}
          href={route.path}
          aria-current={_isCurrentRoute(route.path) ? 'page' : null}>
          <Icon name={route.icon} />
          {route.label}
        </NavLink>
      ))}
    </Navigation>
  )
}

const Navigation = styled(Flex)`
  ${console.log(themed('NavBar.container'))};
`
const NavLink = styled(Anchor)`
  ${themed('NavBar.link')};
`

export default NavBar
