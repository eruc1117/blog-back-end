const User = require("../../class/user")

const titleController = {
    getUserAlltitle: async (req, res) => {
        try {
            const id = Number(req.params.userId)
            const user = new User(id)
            const allTitle = await user.getAlltitle()
            const jsonData = JSON.stringify(allTitle)
            res.status(200).json(jsonData)
        } catch (err) {
            console.log(err)
        }
    }
}


module.exports = titleController