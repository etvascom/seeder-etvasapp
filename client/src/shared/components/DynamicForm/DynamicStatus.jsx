import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Space } from '@kogaio'

const DynamicStatus = ({ title }) => (
  <Space mb={6}>
    <Typography textAlign='center' variant='errorMessage'>{title}</Typography>
  </Space>
)

DynamicStatus.propTypes = {
  title: PropTypes.string
}

DynamicStatus.defaultProps = {
  title: null
}

export default DynamicStatus