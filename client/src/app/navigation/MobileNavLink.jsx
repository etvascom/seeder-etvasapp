import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Typography, Icon } from '@kogaio'
import { themed } from '@kogaio/utils'

const MobileNavLink = ({ iconName, title, ...props }) => (
  <MobileLink {...props}>
    <Icon name={iconName} fontSize={4} />
    <Typography as='title'>{title}</Typography>
  </MobileLink>
)

MobileNavLink.propTypes = {
  iconName: PropTypes.string,
  title: PropTypes.string,
}

const MobileLink = styled.a`
  ${themed('NavBar.mobileTab')};
`

export default MobileNavLink
