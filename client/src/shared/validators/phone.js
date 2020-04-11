/* eslint no-control-regex: 0 */
const phoneRegex = /^\+[0-9]{2}-?[0-9]{6,}$/
export default value => value && !phoneRegex.test(value) ? 'Invalid phone number' : false
