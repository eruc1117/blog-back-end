const express = require('express')
const router = express.Router()

const noteController = require("../../../controller/article/note")

router.post('/:articleId', noteController.getUserArtNote)
router.get('/:articleId', noteController.createNote)

module.exports = router