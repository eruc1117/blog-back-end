const express = require('express')
const router = express.Router()

const noteController = require("../../../controller/article/note")

router.put('/:articleId', noteController.putNote)
router.get('/:articleId', noteController.getUserArtNote)

module.exports = router