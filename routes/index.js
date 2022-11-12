const express = require('express')
const router = express.Router()

const title = require("./models/articles/titles")
const article = require("./models/articles/articles")

router.use('/api/article/title', title)
router.use('/api/article', article)

module.exports = router