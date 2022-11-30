const User = require("../../class/user")

const titleController = {
    getUserAlltitle: async (req, res) => {
        try {
            const id = Number(req.params.userId)
            const user = new User(id)
            const allTitle = await user.getAlltitle()
            if(0 === allTitle.length) throw "沒有任何文章"
            const jsonData = JSON.stringify(allTitle)
            res.status(200).json(jsonData)
        } catch (err) {
            const errMsg = {
                status: 520,
                msg: err
            }
            res.json(errMsg)
        }
    }
}


module.exports = titleController