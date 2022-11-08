const express = require('express')
const router = express.Router()

const title = require("./models/articles/titles")

router.use('/api/title', title)

module.exports = router