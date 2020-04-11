import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Button } from '@kogaio'

const DynamicActions = ({ align, layout, clearFormStatus }) => {
  const onCancel = buttonHandler => () => {
    clearFormStatus()
    if (buttonHandler) buttonHandler()
  }
  return (
    <Flex justifyContent={align}>
      {layout.map(button =>
        button.handler ? (
          <Button
            key={button.name}
            mx={2}
            type={button.type || 'button'}
            variant={button.variant || 'neutral'}
            onClick={onCancel(button.handler)}>
            {button.label || 'Cancel'}
          </Button>
        ) : (
          <Button
            key={button.name}
            mx={2}
            type={button.type || 'submit'}
            variant={button.variant || 'primary'}>
            {button.label || 'Save'}
          </Button>
        )
      )}
    </Flex>
  )
}

DynamicActions.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  clearFormStatus: PropTypes.func,
  layout: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      label: PropTypes.string,
      type: PropTypes.string,
      handler: PropTypes.func,
      variant: PropTypes.string
    })
  )
}

DynamicActions.defaultProps = {
  align: 'center',
  layout: []
}

export default DynamicActions
