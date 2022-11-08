const express = require('express')
const router = express.Router()
const titleController = require("../../../controller/article/titles")

router.get('/:id', titleController.getUserAlltitle)

module.exports = router