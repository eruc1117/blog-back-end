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
      const readerId = data.reader_id;
      const articleId = data.article_id;
      const sqlCmd = `INSERT INTO notes (article_id, reader_id)
      VALUES (${readerId}, ${articleId})
      ON CONFLICT (article_id, reader_id) 
      DO Nothing RETURNING notes.id;`;
      const sqlResult = await pool().query(sqlCmd);
      let noteId = sqlResult.length > 0 ?
      Number(sqlResult.rows[0]["id"]) :
      null
      const filter = {article_id: articleId, reader_id:readerId}
      const update = {note: note}
      const option = {
        new: true,
        upsert: true // Make this update into an upsert
      }
      const mongodbResult = await NoteModel.findOneAndUpdate(filter, update, option);
      noteId = !(Boolean(noteId)) ? mongodbResult.id : noteId
      await pool().query("COMMIT")
      return {
        id: noteId,
        readerId: readerId,
        articleId: articleId,
        note: markdown.render(note)
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Article;
