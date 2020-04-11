import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { themeGet } from '@kogaio/utils'
import { ActivityIndicator } from '@kogaio'

const DynamicShadow = ({ visible }) => {
  if (!visible) return null
  return (
    <Shadow>
      <ActivityIndicator
        variant='runningbar'
        colors={{ background: 'transparent', primary: 'accent' }}
      />
    </Shadow>
  )
}

const Shadow = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: ${themeGet('colors.blur')};
`

DynamicShadow.propTypes = {
  visible: PropTypes.bool
}

DynamicShadow.defaultProps = {
  visible: false
}

export default DynamicShadow
