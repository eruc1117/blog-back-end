const ArticleModel = require("../config/mongodb/models/article");
const NoteModel = require("../config/mongodb/models/note");

class Article {
  constructor(id) {
    this.id = id;
  }

  async getData() {
    try {
      const query = { id: Number(this.id) };
      const article = await ArticleModel.findOne(query);
      return article;
    } catch (err) {
      console.log(err);
    }
  }

  async getUserNotes(userId) {
    try {
      const query = { article_id: Number(this.id), author_id: Number(userId)};
      const notes = await NoteModel.findOne(query);
      return notes;
    } catch (err) {
      console.lgg(err);
    }
  }
}

module.exports = Article;
