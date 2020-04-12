import BASE_COLORS from './core/colors'
import FONTS from './core/fonts'

import NavBar from './components/navigation'
import Panel from './components/panel'

import typography from './components/typography'
import buttons from './components/buttons'

const theme = Object.seal({
  colors: {
    ...BASE_COLORS,
  },
  fonts: FONTS,
  NavBar,
  Panel,
  typography,
  buttons,
})

export default theme
