import { _md } from '../_utils'
import {
  routerWrapperHorizontalPaddingXS,
  routerWrapperHorizontalPaddingMD,
  routerWrapperPaddingBottom,
  routerWrapperMarginBottom
} from '../sizes'

export default {
  wrapper: {
    paddingBottom: routerWrapperPaddingBottom,
    overflowY: 'scroll',
    width: '100%',
    paddingLeft: routerWrapperHorizontalPaddingXS,
    paddingRight: routerWrapperHorizontalPaddingXS,
    marginBottom: routerWrapperMarginBottom,
    ..._md({
      paddingBottom: 0,
      paddingLeft: routerWrapperHorizontalPaddingMD,
      paddingRight: routerWrapperHorizontalPaddingMD,
      overflowY: 'unset'
    })
  }
}
