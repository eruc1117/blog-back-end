const express = require('express')
const routes = require('./routes/index')
const app = express()

const PORT = 4000

app.use(routes)

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}!`)
})
