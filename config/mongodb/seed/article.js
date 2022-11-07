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
            "article": "TEST"
        })
        console.log(result)
    } catch (err) {
        console.log(err)
    } finally {
        await mongo.client.close()
    }
}

