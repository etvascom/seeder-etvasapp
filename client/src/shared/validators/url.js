/* eslint no-control-regex: 0 */
export const urlRegex = /(https?):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/

export default value => value && !urlRegex.test(value) ? 'Invalid URL format' : false
