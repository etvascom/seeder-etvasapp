export default value => {
  if (value === undefined) return 'Required'
  switch (typeof value) {
    case 'string':
      return !value || !value.trim().length ? 'Required' : false
    case 'object':
      return !Object.keys(value).length ? 'Required' : false
    default:
      return false
  }
}
