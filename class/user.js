const pool = require("../config/postgresql/connect")
const mongodb = require("../config/mongodb/connect")

class User  {
    constructor(id) {
        this.id = id
    }

    getUser () {
        const sqlCmd = `SELECT id, name, email, admin FROM users WHERE id=${this.id}`
        return pool().query(sqlCmd)
        .then(res => {
            return res.rows
        })
    }
    getAlltitle () {
        const sqlCmd = `SELECT id , author_id, title FROM articles
        WHERE author_id = ${this.id}`
        return pool().query(sqlCmd)
        .then(res => {
            return res.rows
        })
    }
}

module.exports = User