const info = (module, text) => {
  return console.info(`[${module}] - ${text}`)
}

const error = (module, text) => {
  return console.error(`[${module}] - ${text}`)
}

module.exports = { info, error }