const Article = require("../../class/article");

const noteController = {
  getUserArtNote: async (req, res) => {
    try {
      const userId = 1; //暫時，之後用登入的 userId
      const articleId = req.params.articleId;
      const article = new Article(articleId);
      const noteDatas = await article.getUserNotes(userId);
      const jsonData = JSON.stringify(noteDatas);
			res.status(200).json(jsonData)
    } catch (err) {
			console.log(err)
		}
  }
};

module.exports = noteController;
