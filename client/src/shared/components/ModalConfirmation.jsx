import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Flex, Space, Typography } from '@kogaio'
import { themed } from '@kogaio/utils'

const ModalConfirmation = ({ errorMessage, isVisible, loading, title, confirm, cancel }) => {
  if (!isVisible) return null

  return (
    <ShadowWrapper>
      <Container>
        <Space mb={4}>
          <Typography textAlign='center' variant='errorMessage'>{errorMessage}</Typography>
        </Space>
        <Typography textAlign='center' variant='modalCardTitle'>
          {title}
        </Typography>
        <Flex justifyContent='center' alignItems='center' pt={8}>
          <Button
            disabled={loading}
            variant={cancel.variant}
            mr={2}
            onClick={cancel.handler}>
            {cancel.text}
          </Button>
          <Button
            disabled={loading}
            loading={loading}
            variant={confirm.variant}
            ml={2}
            onClick={confirm.handler}>
            {confirm.text}
          </Button>
        </Flex>
      </Container>
    </ShadowWrapper>
  )
}

const ShadowWrapper = styled.div`
  ${themed('Modal.shadow')};
`

const Container = styled.div`
  ${themed('Assets.cardContainer')}
`

ModalConfirmation.propTypes = {
  errorMessage: PropTypes.string,
  isVisible: PropTypes.bool,
  loading: PropTypes.bool,
  title: PropTypes.string,
  cancel: PropTypes.shape({
    variant: PropTypes.string,
    handler: PropTypes.func,
    text: PropTypes.string
  }).isRequired,
  confirm: PropTypes.shape({
    variant: PropTypes.string,
    handler: PropTypes.func,
    text: PropTypes.string
  }).isRequired
}

export default ModalConfirmation
