const pool = require("../config/postgresql/connect")
const mongodb = require("../config/mongodb/connect")

class Article  {
    constructor(id) {
        this.id = id
    }

    async getData () {
        try {
            const db = mongodb.client.db("blog")
            const articleCollection = db.collection("article")
            const query = {id: this.id}
            console.log(query)
            const article = await articleCollection.findOne(query)
            return article
        } catch (err) {
            console.log(err)
        } finally {
            await mongodb.client.close()
        }

    }
}

module.exports = Article