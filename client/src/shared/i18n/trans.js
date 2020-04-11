// TODO: implement translate based on multiple languages
const translate = text => text

export default (text, parameters) => {
  const translated = translate(text)
  if (!parameters) return translated

  return parameters.reduce((text, parameter, idx) => {
    const re = new RegExp(`\\{${idx}\\}`)
    return text.replace(re, parameter)
  }, translated)
}
