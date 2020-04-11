import { _border } from '../_utils'
import { inputHeight, inputPadding, inputRadius, inputFontSize } from '../sizes'
import { inputFg, inputDisabledFg } from '../theme-colors'

const DEFAULT_STYLE = {
  '&.dropdown-active': {
    borderColor: inputDisabledFg,
    borderRadius: `${inputRadius}px ${inputRadius}px 0 0`,
    borderBottom: 'none',
    ':hover': {
      borderBottom: 'none'
    }
  },
  '&.dropdown-selected': {
    border: _border(inputDisabledFg),
    padding: inputPadding,
    borderRadius: inputRadius,
    width: '100%',
    height: inputHeight,
    outline: 'none',
    '& > div': {
      color: inputFg,
      fontSize: inputFontSize
    },
    '& > i': {
      padding: 0
    },
    '.dropdown-text': {
      padding: 0
    },
    ':hover': {
      borderColor: inputDisabledFg
    },
    '& > div.dropdown-placeholder': {
      borderColor: inputDisabledFg,
      color: inputDisabledFg
    }
  },
  '&.dropdown-list': {
    borderColor: inputDisabledFg,
    borderRadius: `0 0 ${inputRadius}px ${inputRadius}px`,
    borderTop: 'none'
  },
  '.dropdown-text': {
    padding: inputPadding
  },
  '.dropdown-item': {
    ':first-of-type': {
      borderTop: _border(inputDisabledFg)
    },
    ':last-of-type': {
      borderRadius: `0 0 ${inputRadius}px ${inputRadius}px`
    },
    button: {
      padding: 0
    }
  }
}

export default {
  default: DEFAULT_STYLE,
  error: DEFAULT_STYLE
}
