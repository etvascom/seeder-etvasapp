import { inputBg, inputBorderColor, inputHoverBorderColor } from '../theme-colors'
import { _border } from '../_utils'

export default {
  default: {
    backgroundColor: inputBg,
    border: _border(inputBorderColor),
    borderRadius: '2px',
    ':hover, :focus': {
      borderColor: inputHoverBorderColor
    }
  }
}
