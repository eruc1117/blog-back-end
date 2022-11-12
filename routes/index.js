const express = require('express')
const router = express.Router()

const title = require("./models/articles/titles")
const article = require("./models/articles/articles")
const note = require("./models/articles/notes")

router.use('/api/article/title', title)
router.use('/api/article', article)
router.use('/api/note', note)

module.exports = router