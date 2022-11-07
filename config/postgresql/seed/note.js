const pool = require('../connect')

const note = "INSERT INTO notes(author_id, article_id) VALUES(1, 1)"

pool().query(note)
    .then(res => console.log(res))
    .catch(e => console.error(e.stack))