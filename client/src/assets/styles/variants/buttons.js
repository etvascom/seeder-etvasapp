import {
  inputFontSize,
  productPurchaseButton,
  productPurchasePadding
} from '../sizes'

import {
  primaryButtonBg,
  primaryButtonFg,
  outlineBorderColor,
  productPurchaseButtonBg,
  buttonDisabled,
  danger,
  dark,
  productPurchaseButtonFg,
  productUseButtonBg,
  productUseButtonFg,
  defaultBtnHoverBg,
  white
} from '../theme-colors'

import { _border } from '../_utils'

const DEFAULT_BUTTON_STYLE = {
  fontSize: inputFontSize,
  outline: 'none',
  minWidth: 80,
  minHeight: 28,
  height: 30,
  borderRadius: 30,
  textTransform: 'none',
  fontWeight: 'normal',
  '&:disabled': {
    opacity: '.5',
    '&:hover': {
      backgroundColor: defaultBtnHoverBg
    }
  }
}

export default {
  default: {
    ...DEFAULT_BUTTON_STYLE
  },
  primary: {
    ...DEFAULT_BUTTON_STYLE,
    backgroundColor: primaryButtonBg,
    color: primaryButtonFg,
    '&:active, &:focus': {
      backgroundColor: primaryButtonBg
    },
    '&:hover': {
      backgroundColor: primaryButtonBg,
      opacity: '.9'
    }
  },
  outline: {
    ...DEFAULT_BUTTON_STYLE,
    borderColor: outlineBorderColor,
    ':focus, :active': {
      borderColor: outlineBorderColor
    }
  },
  outlined: {
    ...DEFAULT_BUTTON_STYLE,
    border: _border(productPurchaseButtonBg),
    backgroundColor: 'transparent',
    ':focus, :active': {
      borderColor: productPurchaseButtonBg
    },
    ':disabled': {
      borderColor: buttonDisabled,
      color: buttonDisabled
    },
    color: dark,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    height: productPurchaseButton,
    minHeight: 'auto',
    padding: `0 ${productPurchasePadding}`
  },
  /*TODO: Rename to brandBtn*/
  productPurchase: {
    ...DEFAULT_BUTTON_STYLE,
    backgroundColor: productPurchaseButtonBg,
    color: productPurchaseButtonFg,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    height: productPurchaseButton,
    minHeight: 'auto',
    padding: `0 ${productPurchasePadding}`
  },
  /*TODO: Rename to brandBtnOutline*/
  productUse: {
    ...DEFAULT_BUTTON_STYLE,
    backgroundColor: productUseButtonBg,
    color: productUseButtonFg,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    height: productPurchaseButton,
    minHeight: 'auto',
    padding: `0 ${productPurchasePadding}`
  },
  tiny: {
    margin: '0',
    padding: '0',
    minHeight: '48px',
    background: 'transparent',
    fontSize: '.75rem',
    textTransform: 'none',
    fontWeight: 'normal',
    minWidth: 'auto'
  },
  danger: {
    ...DEFAULT_BUTTON_STYLE,
    backgroundColor: danger,
    color: white
  }
}
