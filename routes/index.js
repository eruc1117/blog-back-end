const express = require('express')
const router = express.Router()

const title = require("./models/articles/titles")

router.use('/api/article/title', title)

module.exports = router