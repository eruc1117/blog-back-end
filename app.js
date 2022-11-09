const express = require('express')
const routes = require('./routes/index')
const cors = require("cors")
const app = express()

const PORT = 4000

app.use(cors())
app.use(routes)

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}!`)
})
