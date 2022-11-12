const express = require('express')
const router = express.Router()

const articleController = require("../../../controller/article/article")

router.get('/:articleId', articleController.getOneArticle)

module.exports = router