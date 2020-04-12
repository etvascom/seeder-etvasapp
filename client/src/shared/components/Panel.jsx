import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Flex, Box } from '@kogaio'
import { themed } from '@kogaio/utils'

const Panel = ({ children, ...props }) => (
  <StyledPanel {...props}>{children}</StyledPanel>
)

const StyledPanel = styled(Flex)`
  ${themed('Panel.container')};
`

const StyledSection = styled(Box)`
  ${themed('Panel.section')};
`

const StyledImage = styled.div`
  ${themed('Panel.image')};
  ${({ src }) => `background-image: url(${src})`};
`

Panel.propTypes = {
  children: PropTypes.node,
}

Panel.Section = StyledSection
Panel.Image = StyledImage

export default Panel
