const Article = require("../../class/article")

const articleController = {
    getOneArticle: async (req, res) => {
        try {
            const articleId = req.params.articleId
            const article = new Article(articleId)
            const articleData = await article.getData()
            const jsonData = JSON.stringify(articleData)
            res.status(200).json(jsonData)
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = articleController