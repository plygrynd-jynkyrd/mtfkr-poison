const express = require('express')

const connect = () => new Promise((resolve, reject) => {
  const app = express()

  app.use(express.urlencoded({ extended: false }))

  app.listen(3000, (e) => {
    if(e) return reject(e)

    return resolve(app)
  })
})

module.exports = { connect }