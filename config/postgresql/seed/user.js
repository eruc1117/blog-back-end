const pool = require('../connect')

const user = "INSERT INTO users(name, email, password, admin) VALUES('eruc', 'eruc101010@gmail.com', 'password', true);"

pool().query(user)
    .then(res => console.log(res.rows[0]))
    .catch(e => console.error(e.stack))