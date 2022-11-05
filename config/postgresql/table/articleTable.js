const pool = require('../connect')


const articleTable = "CREATE TABLE articles(id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,auther_id bigint references users(id),title VARCHAR(100))"

pool().query(articleTable)
    .then(res => {console.log(res.rows[0])
        pool.end()})
    .catch(e => console.error(e.stack))