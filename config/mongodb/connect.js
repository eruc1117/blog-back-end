const path = require('path')
const envPath = path.join(__dirname, '../../.env')
require('dotenv').config({ path: envPath })
const {MongoClient} = require('mongodb');

class MongoBot {
    constructor() {
      const url = process.env.MONGODBURI
      this.client = new MongoClient(url);
    }
}

module.exports = new MongoBot();