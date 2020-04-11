import React from 'react'
import styled from 'styled-components'
import { themed } from '@kogaio/utils'

const FieldLabel = ({ required, title }) => {
  return (
    <Wrapper>
      {title}
      {required ? ' *' : ''}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${themed('FieldGroup.label')};
`

export default FieldLabel
