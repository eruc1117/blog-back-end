const mongo = require('../connect')

createArticle() 

async function createArticle () {
    try {
        await mongo.client.connect()
        const db = mongo.client.db("blog")
        const collection = db.collection("article")
        const result = await collection.insertOne({
            "id": 1,
            "author_id": 1,
            "tilte": "titel",
            "article": "TEST"
        })
        return result
    } catch (err) {
        console.log(err)
    } finally {
        await mongo.client.close()
    }
}

