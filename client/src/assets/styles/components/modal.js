import {
  modalCardOverlaySpacing,
  modalCardRadius,
  inputRadius,
  modalTagPadding,
  modalTagFont,
  modalCardSpacing,
  modalCardPadding,
  modalCardTight,
  pageSpacing,
  pageWidth
} from '../sizes'

import {
  modalShadow,
  modalOverlay,
  modalTagBg,
  modalTagFg,
  modalCardBorder
} from '../theme-colors'

import { _border, _md } from '../_utils'

export default {
  shadow: {
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: modalShadow,
    zIndex: '100',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  overlay: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    left: modalCardOverlaySpacing,
    top: modalCardOverlaySpacing,
    right: modalCardOverlaySpacing,
    bottom: modalCardOverlaySpacing,
    borderRadius: modalCardRadius,
    zIndex: '10',
    backgroundColor: modalOverlay
  },
  tag: {
    borderRadius: inputRadius,
    backgroundColor: modalTagBg,
    color: modalTagFg,
    padding: modalTagPadding,
    fontSize: modalTagFont,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  container: {
    ..._md({
      position: 'relative',
      maxWidth: pageWidth.lg,
      margin: '0 auto',
      padding: pageSpacing.xs,
      paddingTop: 0
    })
  },
  containerWrapper: {
    width: '100%',
    position: 'relative',
    padding: `0 ${pageSpacing.xs}`,
    ..._md({
      padding: 0,
      margin: 0,
      // paddingLeft: sidebarWidth.lg,
      width: '100%'
    })
  },
  card: {
    position: 'relative',
    borderRadius: modalCardRadius,
    border: _border(modalCardBorder),
    margin: '0 auto',
    padding: modalCardPadding.xs,
    // maxWidth: pageWidth,
    '&.is-tight': {
      maxWidth: modalCardTight,
      [`@media (min-width: ${modalCardTight})`]: {
        margin: `0 ${modalCardSpacing} 0 0`,
        position: 'absolute',
        right: 0
      }
    },
    ..._md({
      padding: modalCardPadding.md
    })
  },
  close: {
    position: 'absolute',
    right: '.25rem',
    top: '.25rem',
    '> button': {
      padding: '.75rem'
    }
  }
}
