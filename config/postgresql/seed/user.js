const pool = require('../connect')

const userTable = "INSERT INTO users(name, email, password, admin) VALUES('eruc', 'eruc101010@gmail.com', 'password', true);"

pool().query(userTable)
    .then(res => console.log(res.rows[0]))
    .catch(e => console.error(e.stack))