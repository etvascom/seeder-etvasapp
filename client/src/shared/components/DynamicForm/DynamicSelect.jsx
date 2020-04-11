import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from '@kogaio'

const DynamicSelect = ({ options, ...props }) => (
  <Dropdown {...props}>
    {options.map(option => (
      <Dropdown.Option key={option.id} value={option}>
        {option.label}
      </Dropdown.Option>
    ))}
  </Dropdown>
)

DynamicSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
      label: PropTypes.string
    })
  )
}

export default DynamicSelect
