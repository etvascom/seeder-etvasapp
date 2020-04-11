import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Icon, Space, Typography } from '@kogaio'

const FieldError = ({ error, ...props }) =>
  error ? (
    <Flex alignItems='center' justifyContent='flex-end' {...props}>
      <Icon name='error_outline' fontSize={0} color='red' />
      <Space ml={1}>
        <Typography variant='errorMessage'>{error}</Typography>
      </Space>
    </Flex>
  ) : null

FieldError.propTypes = {
  error: PropTypes.string
}

export default FieldError
