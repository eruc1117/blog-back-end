const pool = require('../connect')


const noteTable = "CREATE TABLE notes(id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,auther_id bigint references users(id), article_id bigint references articles(id))"

pool().query(noteTable)
    .then(res => {console.log(res.rows[0])})
    .catch(e => console.error(e.stack))