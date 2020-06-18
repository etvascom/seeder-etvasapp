import React, { useContext, useCallback } from 'react'
import { T } from '@etvas/i18n'
import { Box, NavBar } from '@etvas/etvaskit'
import { NavContext } from './NavProvider'

const NavItem = NavBar.Item

export const NavMenu = () => {
  const { currentView } = useContext(NavContext)
  const isActive = useCallback(p => p.includes(currentView), [currentView])

  return (
    <Box mb={[0, 9]}>
      <NavBar>
        <NavItem
          as='a'
          icon='eye'
          href='#overview'
          isActive={isActive('#overview')}
          label={<T label='menu.overview' />}
        />

        <NavItem
          as='a'
          icon='info'
          href='#support'
          isActive={isActive('#support')}
          label={<T label='menu.support' />}
        />
      </NavBar>
    </Box>
  )
}
