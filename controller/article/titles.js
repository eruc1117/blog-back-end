const User = require("../../class/user")

const titleController = {
    getUserAlltitle: async (req, res) => {
        try {
            const id = Number(req.params.userId)
            const user = new User(id)
            const allTitle = await user.getAlltitle()
            res.status(200).json(allTitle)
        } catch (err) {
            console.log(err)
        }
    }
}


module.exports = titleController