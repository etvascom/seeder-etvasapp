import {
  assetsDescriptionColor,
  danger,
  sectionTitleFg,
  sectionSubtitleFg,
  modalCardTitleFg,
  navBackFg
} from '../theme-colors'

import {
  assetsStatusFontSize,
  errorMessage,
  sectionTitleFontSize,
  sectionSubtitleWidth,
  sectionSubtitleFontSize,
  modalCardTitle,
  modalCardText,
  sectionTitleHeight
} from '../sizes'

import FONTS from '../fonts'

import { _md } from '../_utils'

export default {
  errorMessage: {
    fontWeight: 'normal',
    color: danger,
    fontSize: errorMessage
  },
  sectionTitle: {
    fontWeight: 'normal',
    color: sectionTitleFg.xs,
    fontSize: sectionTitleFontSize.xs,
    height: sectionTitleHeight.xs,
    ..._md({
      padding: 0,
      margin: 0,
      display: 'flex',
      height: sectionTitleHeight.lg,
      color: sectionTitleFg.lg,
      fontSize: sectionTitleFontSize.lg,
      alignItems: 'center'
    })
  },
  navBack: {
    padding: 0,
    margin: 0,
    display: 'flex',
    height: sectionTitleHeight.lg,
    color: navBackFg,
    fontSize: sectionTitleFontSize.xs,
    alignItems: 'center',
    fontWeight: 'normal'
  },
  sectionSubtitle: {
    fontWeight: 'normal',
    color: sectionSubtitleFg,
    maxWidth: sectionSubtitleWidth,
    fontSize: sectionSubtitleFontSize
  },
  modalCardTitle: {
    fontWeight: 'bold',
    fontFamily: FONTS.complementary,
    color: modalCardTitleFg,
    fontSize: modalCardTitle,
    lineHeight: '1.2',
    overflow: 'hidden'
  },
  modalCardText: {
    fontSize: modalCardText
  },
  modalPrice: {
    fontWeight: 'bold',
    fontFamily: FONTS.complementary,
    color: modalCardTitleFg,
    fontSize: modalCardTitle
  },
  assetsDescription: {
    color: assetsDescriptionColor,
    fontFamily: FONTS.complementary
  },
  assetsTitle: {
    fontWeight: 'bold',
    fontFamily: FONTS.complementary,
  },
  assetsStatus: {
    fontFamily: FONTS.complementary,
    fontSize: assetsStatusFontSize,
    fontWeight: 600
  }
}
