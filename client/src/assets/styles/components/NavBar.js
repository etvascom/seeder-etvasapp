import { _border, _md } from '../_utils'
import {
  navBarHeight,
  navBarContainerHorizontalPadding,
  navBarVerticalPadding
} from '../sizes'
import {
  navigationActive,
  navigationNotActive,
  navigationNotActiveBorder,
  navigationMobileContainerBg,
  navigationNavBarBorderTop
} from '../theme-colors'

export default {
  container: {
    zIndex: 1,
    position: 'fixed',
    bottom: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    paddingBottom: navBarVerticalPadding,
    paddingTop: navBarVerticalPadding,
    background: navigationMobileContainerBg,
    fontWeight: 'bold',
    borderTop: _border(1, navigationNavBarBorderTop),
    ..._md({
      position: 'relative',
      margin: 0,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      height: `${navBarHeight.lg}px`,
      padding: `0px ${navBarContainerHorizontalPadding}px`
    })
  },
  tab: {
    display: 'none',
    ..._md({
      display: 'block',
      textDecoration: 'none',
      color: navigationNotActive,
      borderBottom: _border(4, navigationNotActiveBorder),
      '&#active-route': {
        color: navigationActive,
        borderBottom: _border(4, navigationActive)
      }
    })
  },
  mobileTab: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    '& > i': {
      color: navigationNotActive
    },
    '& > title': {
      color: navigationNotActive
    },
    '&#active-route-mobile': {
      color: navigationActive,
      '& > i': {
        color: navigationActive
      },
      '& > title': {
        color: navigationActive
      }
    },
    ..._md({
      display: 'none'
    })
  }
}
