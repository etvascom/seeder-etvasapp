import { md } from '@etvas/etvaskit'

const NAV_MOBILE_ITEM_SIZE = 64

export default {
  container: ({ theme }) => ({
    position: 'fixed',
    bottom: 0,
    borderTop: `1px solid ${theme.theme.colors.gray}`,
    width: '100%',
    backgroundColor: theme.theme.colors.white,
    ...md(theme)({
      alignItems: 'flex-start',
      position: 'static',
      border: 'none',
      background: 'transparent'
    })
  }),
  link: ({ theme }) => ({
    borderRight: `1px solid ${theme.colors.gray}`,
    height: `${NAV_MOBILE_ITEM_SIZE}px`,
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textDecoration: 'none',
    color: theme.colors.light,
    fontWeight: 300,
    '.material-icons': {
      color: theme.colors.light
    },
    '&:last-child': {
      borderRight: 'none'
    },
    '&[aria-current="page"]': {
      backgroundColor: theme.colors.brand,
      color: theme.colors.white,
      '.material-icons': {
        color: theme.colors.white
      }
    },
    ...md(theme)({
      flexGrow: 0,
      flexDirection: 'row',
      border: 'none',
      color: theme.colo.light,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      paddingRight: 48,
      background: 'transparent',
      '.material-icons': {
        paddingRight: '0.5em'
      },
      '&[aria-current="page"]': {
        backgroundColor: 'transparent',
        color: theme.colo.brand,
        '.material-icons': {
          color: theme.colo.brand
        }
      }
    })
  })
}
