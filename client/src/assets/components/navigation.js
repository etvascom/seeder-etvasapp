import colors from '../core/colors'
import breakpoints from '../core/breakpoints'
const md = rules => ({
  [`@media (min-width: ${breakpoints.md})`]: rules,
})

const NAV_MOBILE_ITEM_SIZE = 64

export default {
  container: {
    position: 'fixed',
    bottom: 0,
    borderTop: `1px solid ${colors.gray}`,
    width: '100%',
    backgroundColor: colors.white,
    ...md({
      alignItems: 'flex-start',
      position: 'static',
      border: 'none',
      background: 'transparent',
    }),
  },
  link: {
    borderRight: `1px solid ${colors.gray}`,
    height: `${NAV_MOBILE_ITEM_SIZE}px`,
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textDecoration: 'none',
    color: colors.light,
    fontWeight: 300,
    '.material-icons': {
      color: colors.light,
    },
    '&:last-child': {
      borderRight: 'none',
    },
    '&[aria-current="page"]': {
      backgroundColor: colors.brand,
      color: colors.white,
      '.material-icons': {
        color: colors.white,
      },
    },
    ...md({
      flexGrow: 0,
      flexDirection: 'row',
      border: 'none',
      color: colors.light,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      paddingRight: 48,
      background: 'transparent',
      '.material-icons': {
        paddingRight: '0.5em',
      },
      '&[aria-current="page"]': {
        backgroundColor: 'transparent',
        color: colors.brand,
        '.material-icons': {
          color: colors.brand,
        },
      },
    }),
  },
}
