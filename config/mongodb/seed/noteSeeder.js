const db = require('../connect')
const NoteModel = require("../models/note")

db.once('open', async () => {
    await NoteModel.create(
        {
            "id": 1,
            "reader_id": 1,
            "article_id": 1,
            "note": "TEST"
        }
    )
})



