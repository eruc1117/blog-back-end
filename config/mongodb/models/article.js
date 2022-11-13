const mongoose = require("mongoose");
const { Schema } = mongoose;

const articleSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  author_id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  } ,
  article:{
    type: String,
    required: true
  } ,
});

module.exports = mongoose.model("articleModel", articleSchema);
