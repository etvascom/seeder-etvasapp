import React from 'react'
import PropTypes from 'prop-types'
import { AuthorizingIndicator, Unauthorized } from '.'

const AuthorizingOrUnauthorized = ({ loading }) =>
  loading ? <AuthorizingIndicator /> : <Unauthorized />

  AuthorizingOrUnauthorized.propTypes = {
  loading: PropTypes.bool
}

export default AuthorizingOrUnauthorized
