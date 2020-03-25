const ejs = require('ejs')
const api = require('./api')
const database = require('./database')

const renderPage = (login, res) =>
  ejs.renderFile('./index.ejs',  { login } , (err, str) => {
    if(err) return res.send(err)
   
    res.send(str)
  })

console.log('initializing app')
database.connect().then((dbConnection) => {
  console.log('database connected')
  api.connect().then((app) => {
    app.get('/', (req,res) => {
      database.insertAccess(dbConnection)
      return renderPage({}, res)
    })
    
    app.post('/login', (req,res) => {
      const { user, password } = req.body
    
      return renderPage(req.body, res)
    })

    console.log('ready')
  })
  .catch((e) => console.error(e.stack))
})
.catch((e) => console.error(e.stack))



