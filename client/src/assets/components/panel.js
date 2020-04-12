import colors from '../core/colors'

const container = {
  borderRadius: 8,
  boxShadow: colors.shadow,
  backgroundColor: colors.white,
}

const section = {
  padding: 24,
}

const image = {
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  flex: '0 0 50%',
  height: 'auto',
  backgroundSize: 'cover',
  borderRadius: '0 8px 8px 0',
}

export default {
  container,
  section,
  image,
}
