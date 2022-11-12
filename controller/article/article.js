const Article = require("../../class/article")

const articleController = {
    getOneArticle: async (req, res) => {
        try {
            const articleId = Number(req.params.articleId)
            const article = new Article(articleId)
            const articleData = await article.getData()
            res.status(200).json(articleData)
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = articleController