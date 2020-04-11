export const getQueryVars = queryString => {
  let s = queryString || window.location.search
  if (typeof s !== 'string') {
    return {}
  }
  if (s.indexOf('?') === 0) {
    s = s.substr(1)
  }
  const segments = s.split('&')
  return segments.reduce((vars, segment) => {
    const [n, v] = segment.split('=')
    vars[n] = v
    return vars
  }, {})
}
