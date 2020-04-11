import React, { Fragment } from 'react'
import styled from 'styled-components'

import { Flex, Space } from '@kogaio'
import { themed } from '@kogaio/utils'
import { Link } from '@reach/router'

import { appPaths } from 'app/constants'
import { capitalizeFirstChar } from '@shared/funcs'
import MobileNavLink from './MobileNavLink'

const NavBar = () => {
  const injectActiveId = platform => ({ isCurrent }) => {
    if (isCurrent)
      return platform === 'web'
        ? { id: 'active-route' }
        : { id: 'active-route-mobile' }
  }

  return (
    <NavigationContainer>
      {appPaths.map((pathObj, index) => {
        const linkTitle = capitalizeFirstChar(pathObj.name)
        return (
          <Fragment key={index}>
            <Space ml={index === 0 ? 0 : 4}>
              <DesktopNavigationTab
                to={pathObj.name}
                getProps={injectActiveId('web')}>
                {linkTitle}
              </DesktopNavigationTab>
            </Space>
            <MobileNavLink
              to={pathObj.name}
              getProps={injectActiveId('mobile')}
              title={linkTitle}
              iconName={pathObj.iconName}
            />
          </Fragment>
        )
      })}
    </NavigationContainer>
  )
}

const NavigationContainer = styled(Flex)`
  ${themed('NavBar.container')}
`

const DesktopNavigationTab = styled(Link)`
  ${themed('NavBar.tab')}
`

export default NavBar
