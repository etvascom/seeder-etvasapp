import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Flex, Box } from '@etvas/etvaskit'

const Panel = ({ children, ...props }) => (
  <StyledPanel {...props}>{children}</StyledPanel>
)

const StyledPanel = styled(Flex)`
  ${({ theme }) => ({
    borderRadius: 8,
    boxShadow: theme.colors.shadow,
    backgroundColor: theme.colors.white
  })}
`

const StyledSection = styled(Box)`
  padding: 24px;
`

const StyledImage = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  flex: 0 0 50%;
  height: auto;
  background-size: cover;
  border-radius: 0 8px 8px 0;

  ${({ src }) => `background-image: url(${src})`};
`

Panel.propTypes = {
  children: PropTypes.node
}

Panel.Section = StyledSection
Panel.Image = StyledImage

export default Panel
