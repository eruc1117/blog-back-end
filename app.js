const express = require('express')
const routes = require('./routes/index')
const cors = require("cors")
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')

const app = express()

const PORT = 4000

app.use(cors())

app.use(express.json())

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'API_Log.txt'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))

app.use(routes)

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}!`)
})
