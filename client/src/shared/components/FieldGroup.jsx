import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box } from '@kogaio'
import { themed } from '@kogaio/utils'

const FieldGroup = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
)

const Wrapper = styled(Box)`
  ${themed('FieldGroup.group')};
`

FieldGroup.propTypes = {
  children: PropTypes.any
}

export default FieldGroup
