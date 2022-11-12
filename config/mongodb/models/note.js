const mongoose = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  author_id: {
    type: Number,
    required: true,
    unique: true
  },
  article_id: {
    type: Number,
    required: true,
    unique: true
  },
  note:{
    type: String,
    required: true
  } ,
});

module.exports = mongoose.model("noteModel", noteSchema);
