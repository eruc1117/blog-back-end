const express = require('express')
const router = express.Router()

const articleController = require("../../../controller/article/article")

router.get('/:articleId', articleController.getOneArticle)
router.put('/', articleController.upsertArticle)

module.exports = router