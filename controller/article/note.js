const Article = require("../../class/article");

const noteController = {
  getUserArtNote: async (req, res) => {
    try {
      const userId = 1; //暫時，之後用登入的 userId
      const articleId = req.params.articleId;
      const article = new Article(articleId);
      const noteData = await article.getUserNotes(userId);
      const jsonData = JSON.stringify(noteData);
			res.status(200).json(jsonData)
    } catch (err) {
			console.log(err)
		}
  },
  putNote: async (req, res) => {
    try {
      const articleId = req.params.articleId;
      const article = new Article(articleId);
      const body = req.body
      const result = await article.postNote(body)
      const jsonData = JSON.stringify(result);
      res.status(200).json(jsonData)
    } catch (err) {

    }
  }
};

module.exports = noteController;
