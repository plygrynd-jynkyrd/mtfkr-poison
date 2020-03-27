const ejs = require('ejs')
const api = require('./api')
const database = require('./database')
const logger = require('./logger')

const renderPage = (login, res) => new Promise((resolve, reject) => {
  ejs.renderFile('./index.ejs',  { login } , (err, str) => {
    if(err) return reject(err)
    return resolve(str)
  })
})
  
logger.info("database", "initializing")
database.connect().then((dbConnection) => {
  logger.info("database", "connected")

  logger.info("api", "initializing")
  api.connect().then((app) => {
    logger.info("api", "listening")

    app.get('/', (req,res) => {
      logger.info("root request", "requested")

      logger.info("root insert", "inserting")
      database.insertAccess(dbConnection)
      .then((result) => {
        logger.info("root insert", "inserted")

        logger.info("root render", "rendering")
        renderPage({}, res)
        .then((html) => {
          logger.info("root render", "rendered")
          return res.send(html)
        })
        .catch((e) => {
          logger.error("root render", e.stack)
          res.status(500).send(e.stack)
          logger.info("root request", "end")
        })
      })
      .catch((e) => {
        logger.error("root insert", e.stack)
        return res.status(500).send(e.stack)
      })
    })
    
    // app.post('/login', (req,res) => {
    //   const { user, password } = req.body
    
    //   return renderPage(req.body, res)
    // })

    // console.log('ready')
  })
  .catch((e) => logger.error("api", e.stack))
})
.catch((e) => logger.error("database", e.stack))



