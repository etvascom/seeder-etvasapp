import React from 'react'
import styled from 'styled-components'
import { themed } from '@kogaio/utils'

const ModalContainer = ({ children }) => (
  <ContainerWrapper>
    <Container>{children}</Container>
  </ContainerWrapper>
)

const ContainerWrapper = styled.div`
  ${themed('Modal.containerWrapper')};
`

const Container = styled.div`
  ${themed('Modal.container')};
`

export default ModalContainer
