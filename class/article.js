const ArticleModel = require("../config/mongodb/models/article");
const NoteModel = require("../config/mongodb/models/note");
const pool = require("../config/postgresql/connect");

const markdown = require("markdown-it")();

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
      const query = { article_id: Number(this.id), author_id: Number(userId) };
      const notes = await NoteModel.findOne(query);
      return notes;
    } catch (err) {
      console.lgg(err);
    }
  }

  async postNote(data) {
    try {
      const note = data.note;
      const userId = data.user_id;
      const articleId = data.article_id;
      const sqlCmd = `INSERT INTO notes(author_id, article_id) VALUES(${userId}, ${articleId}) returning id`;
      const sqlResult = await pool().query(sqlCmd);
      const noteId = Number(sqlResult.rows[0]["id"])
      const mongodbResult = await NoteModel.create({
        id: noteId,
        author_id: userId,
        article_id: articleId,
        note: note,
      });
      await pool().query("COMMIT");
      return {
        id: noteId,
        readerId: userId,
        articleId: articleId,
        note: markdown.render(note)
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Article;
