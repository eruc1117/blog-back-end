const path = require('path')
const envPath = path.join(__dirname, '../../.env')
require('dotenv').config({ path: envPath })
const pg = require('pg')
const config = ({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port,
})

let connection = new pg.Pool(config)
console.log(connection)
module.exports = () => {return connection}