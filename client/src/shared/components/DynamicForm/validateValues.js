import validators from '@shared/validators'

export default (values, rules) => Object.keys(rules).reduce((errors, fieldName) => {
  const fieldRules = rules[fieldName]
  const fieldInvalid = fieldRules.reduce((message, rule) => {
    if (message === false) {
      if (validators[rule] === undefined) {
        console.error(`Unknown validation rule ${rule} specified on field ${fieldName}`)
        return `Unknown rule ${rule}`
      }
      return validators[rule](values[fieldName])
    }
    return message
  }, false)
  if (fieldInvalid) {
    errors[fieldName] = fieldInvalid
  }
  return errors
}, {})
