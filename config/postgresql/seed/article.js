const pool = require('../connect')

const article = "INSERT INTO articles(auther_id, title) VALUES(1, 'variable');"

pool.query(article, (err, res) => {
    console.log(err, res)
  })