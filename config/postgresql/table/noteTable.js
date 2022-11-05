const pool = require('../connect')


const userTable = "CREATE TABLE notes(id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,auther_id bigint references users(id), article_id bigint references articles(id))"

pool().query(userTable)
    .then(res => console.log(res.rows[0]))
    .catch(e => console.error(e.stack))