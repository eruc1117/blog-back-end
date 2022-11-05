const pool = require('../connect')


const userTable = "CREATE TABLE articles(id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,auther_id bigint references users(id),title VARCHAR(100))"

pool().query(userTable)
    .then(res => console.log(res.rows[0]))
    .catch(e => console.error(e.stack))