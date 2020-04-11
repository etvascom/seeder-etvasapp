import {
  assetsContainerBg,
  cardWrapperBg,
  lightGreen,
  cardWrapperShadow,
  cardWrapperBorder
} from '../theme-colors'
import { _md, _border } from '../_utils'

import {
  assetsCardPadding,
  statusCardPadding,
  productCardRadius
} from '../sizes'

export default {
  container: {
    alignItems: 'center',
    backgroundColor: assetsContainerBg,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: productCardRadius,
    padding: assetsCardPadding
  },
  wrapper: {
    backgroundColor: cardWrapperBg,
    padding: statusCardPadding,
    border: _border(cardWrapperBorder),
    boxShadow: cardWrapperShadow,
    borderRadius: productCardRadius
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: lightGreen,
    width: 60,
    height: 60,
    borderRadius: '50%',
    marginTop: 16,
    marginBottom: 16,
    ..._md({
      width: 100,
      height: 100,
      marginTop: 24,
      marginBottom: 24
    })
  }
}
