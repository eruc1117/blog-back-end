const Article = require("../../class/article")

const articleController = {
    getOneArticle: async (req, res) => {
        try {
            const articleId = req.params.articleId
            const article = new Article(articleId)
            const articleData = await article.getData()
            const data = {
                id: articleData.id,
                authorId: articleData.authorId,
                title: articleData.title,
                article: articleData.article,
                oriArticle: articleData.oriArticle
            }
            const jsonData = JSON.stringify(data)
            res.status(200).json(jsonData)
        } catch (err) {
            console.log(err)
        }
    },
    upsertArticle: async (req, res) => {
        try {
            const data = req.body
            const article = new Article()
            const result = await article.putArticle(data)
            res.status(200).json(result)
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = articleController