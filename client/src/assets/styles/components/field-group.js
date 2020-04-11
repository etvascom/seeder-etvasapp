import { _border, _lg } from '../_utils'
import {
  inputVSpacing,
  inputHeight,
  inputPadding,
  inputRadius,
  inputFontSize,
  inputLabelMarginBottom,
  inputLabelMarginLeft,
  inputTiny,
  inputSmall,
  inputSpacing
} from '../sizes'
import { inputBorderColor, inputFg, inputDisabledFg } from '../theme-colors'

export default {
  group: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: inputVSpacing,
    'input[type="text"], input[type="number"], input[type="email"], input[type="tel"], input[type="date"], input[type="password"]': {
      border: _border(inputBorderColor),
      height: inputHeight,
      padding: inputPadding,
      borderRadius: inputRadius,
      fontSize: inputFontSize,
      width: '100%',
      outline: 'none',
      color: inputFg,
      '&[disabled], &[readonly]': {
        color: inputDisabledFg,
        borderColor: inputDisabledFg,
        cursor: 'forbidden'
      },
      '&.is-tiny': {
        width: inputTiny
      },
      '&.is-tiny-comp': {
        marginLeft: inputSpacing
      },
      '&.is-small': {
        width: inputSmall
      },
      '&.is-small-comp': {
        marginLeft: inputSpacing
      }
    }
  },
  label: {
    display: 'none',
    ..._lg({
      display: 'block',
      marginBottom: inputLabelMarginBottom,
      marginLeft: inputLabelMarginLeft,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontSize: inputFontSize
    })
  }
}
