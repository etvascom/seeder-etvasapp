import {
  assetsContainerBg,
  assetItemBg,
  black,
  cardWrapperBg,
  cardWrapperBorder,
  white,
  cardWrapperShadow
} from '../theme-colors'
import { _border, _md } from '../_utils'

import {
  assetsCardPadding,
  assetsWrapperTopMargin,
  productCardRadius
} from '../sizes'

export default {
  container: {
    backgroundColor: assetsContainerBg,
    display: 'block',
    borderRadius: productCardRadius,
    padding: assetsCardPadding,
    position: 'relative',
    border: _border(cardWrapperBorder),
    boxShadow: cardWrapperShadow
  },
  wrapper: {
    backgroundColor: cardWrapperBg,
    marginTop: assetsWrapperTopMargin
  },
  cardContainer: {
    display: 'block',
    backgroundColor: white,
    borderRadius: productCardRadius,
    width: 'calc(100% - 24px)',
    margin: '0 10px',
    padding: 16,
    border: _border(1, black),
    ..._md({
      width: 480,
      margin: '0 auto',
      padding: 24
    })
  },
  item: {
    backgroundColor: assetItemBg,
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center'
  },
  itemText: {
    flexGrow: 1,
    marginLeft: 8
  }
}
