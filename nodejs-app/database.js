const { Client } = require('pg')
const uuid = require('uuid')

const client = new Client({
  user: 'cobra',
  database: 'webapp',
  password: 'red_skin'
})

const connect = () => client.connect()

const insertAccess = async() => {
  const id = uuid.v1()
  const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  await client.query(`INSERT INTO access (id, date) VALUES ('${id}','${date}');`)
}

module.exports = { connect, insertAccess }
