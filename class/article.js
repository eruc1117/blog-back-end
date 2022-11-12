const ArticleModel = require("../config/mongodb/models/article")

class Article  {
    constructor(id) {
        this.id = id
    }

    async getData () {
        try {
            const query = {id: Number(this.id)}
            const article = await ArticleModel.findOne(query)
            return article
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = Article