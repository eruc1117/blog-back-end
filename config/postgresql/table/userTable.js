const pool = require('../connect')


const userTable = "CREATE TABLE users( id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY, name VARCHAR(50),email VARCHAR(50), password VARCHAR(50 ),admin BOOLEAN NOT NULL)"

pool().query(userTable)
    .then(res => {console.log(res.rows[0])
        pool.end()})
    .catch(e => console.error(e.stack))