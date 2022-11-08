const express = require('express')
const router = express.Router()
const titleController = require("../../../controller/article/titles")

router.get('/:userId', titleController.getUserAlltitle)

module.exports = router