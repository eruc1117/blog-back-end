const db = require('../connect')
const ArticleModel = require("../models/article")

db.once('open', async () => {
    await ArticleModel.create(
        {
            "id": 1,
            "author_id": 1,
            "title": "titel",
            "article": "TEST"
        }
    )
})



