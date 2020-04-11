import * as THEME_COLORS from './styles/theme-colors'
import FONTS from './styles/fonts'

import MODAL_STYLE from './styles/components/modal'
import ASSETS_STYLE from './styles/components/assets-card'
import ROUTER_STYLE from './styles/components/router'
import STATUS_STYLE from './styles/components/status-card'

import FIELD_GROUP_STYLE from './styles/components/field-group'
import HORIZONTAL_LINE_STYLE from './styles/components/horizontal-line'

import NAVBAR_STYLE from './styles/components/NavBar'

import TYPOGRAPHY_VARIANTS from './styles/variants/typography'
import BUTTON_VARIANTS from './styles/variants/buttons'
import DROPDOWN_VARIANTS from './styles/variants/dropdowns'
import INPUT_VARIANTS from './styles/variants/inputs'

const theme = Object.seal({
  colors: {
    ...THEME_COLORS
  },
  fonts: FONTS,
  typography: TYPOGRAPHY_VARIANTS,
  buttons: BUTTON_VARIANTS,
  dropdowns: DROPDOWN_VARIANTS,
  inputs: INPUT_VARIANTS,
  Assets: ASSETS_STYLE,
  FieldGroup: FIELD_GROUP_STYLE,
  Modal: MODAL_STYLE,
  HorizontalLine: HORIZONTAL_LINE_STYLE,
  NavBar: NAVBAR_STYLE,
  Router: ROUTER_STYLE,
  Status: STATUS_STYLE
})

export default theme
