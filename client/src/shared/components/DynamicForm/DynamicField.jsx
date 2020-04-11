import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Field, useField } from 'formik'
import { Flex, Space } from '@kogaio/Responsive'
import { themeGet } from '@kogaio/utils'

import DynamicSelect from './DynamicSelect'
import { FieldError, FieldGroup, FieldLabel } from '@shared/components'

const DynamicField = ({ label, width, type, validate, ...props }) => {
  const [field, { touched, error }, { setValue }] = useField(props)
  const _handleChange = newValue => setValue(newValue)

  switch (type) {
    case 'select':
      return (
        <DynamicSelectWrapper flexDirection='column'>
          <FieldLabel required title={label} />
          <DynamicSelect
            error={touched && error ? error : undefined}
            {...field}
            {...props}
            required={validate.includes('required')}
            onChange={_handleChange}
            onBlur={undefined}
          />
        </DynamicSelectWrapper>
      )

    default:
      return (
        <FieldGroup>
          <FieldLabel required title={label} />
          <Field
            type={type}
            {...field}
            {...props}
            required={validate.includes('required')}
          />
          <Space mt={1} mr={6}>
            <FieldError error={touched && error ? error : undefined} />
          </Space>
        </FieldGroup>
      )
  }
}

const DynamicSelectWrapper = styled(Flex)`
  div:nth-child(2) > div {
    margin-right: ${themeGet('space.6')}px;
    i {
      color: red;
    }
    div {
      color: red;
    }
  }
`

DynamicField.propTypes = {
  width: PropTypes.any,
  type: PropTypes.any,
  validate: PropTypes.arrayOf(PropTypes.string)
}

DynamicField.defaultProps = {
  type: 'text'
}

export default DynamicField
