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
      console.log(article)
      return {
        id: article.id,
        authorId: article.author_id,
        title: article.title,
        article: markdown.render(article.article),
        oriArticle: article.article
      }
    } catch (err) {
      console.log(err);
    }
  }

  async putArticle(data) {
    try {
      const title = data.title
      const article = data.article;
      const authorId = Number(data.authorId);
      let articleId = data.id ? Number(data.id) : null;
      let sqlCmd = ""
      if (articleId) {
        sqlCmd += `UPDATE articles SET title = '${title}' WHERE id = ${articleId} RETURNING articles.id`
      } else {
        sqlCmd += `INSERT INTO articles (author_id, title) VALUES (${authorId}, '${title}') RETURNING articles.id`
      }
      const sqlResult = await pool().query(sqlCmd);
      articleId = sqlResult["rows"][0]["id"]
      const filter = {id: articleId, author_id:authorId}
      const update = {id: articleId, author_id:authorId, title, article}
      const option = {
        new: true,
        upsert: true // Make this update into an upsert
      }
      const mongodbResult = await ArticleModel.findOneAndUpdate(filter, update, option);
      await pool().query("COMMIT")
      return {
        id: articleId,
        authorId,
        title,
        article: markdown.render(article),
        oriArticle: article
      }
    } catch (err) {
      console.log(err);
    }
  }


  async getUserNotes(userId) {
    try {
      const query = { article_id: Number(this.id), author_id: Number(userId) };
      const note = await NoteModel.findOne(query);
      return {
        readerId: note.reader_id,
        articleId: note.article_id,
        note: markdown.render(note.note),
        oriNote: note.note
      }
    } catch (err) {
      console.log(err);
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
      const update = {article_id: articleId, reader_id:readerId, note: note}
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
        note: markdown.render(note),
        oriNote: note
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Article;
