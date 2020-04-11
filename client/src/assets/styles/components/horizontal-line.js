import { cardWrapperBg } from '../theme-colors'
import { assetsCardPadding } from '../sizes'

export default {
  backgroundColor: cardWrapperBg,
  display: 'block',
  marginTop: '24px',
  marginBottom: '16px',
  marginLeft: `-${assetsCardPadding}px`,
  height: '1px',
  width: `calc(100% + ${2 * assetsCardPadding}px)`
}
