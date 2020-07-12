const express = require('express')
const app = express()

app.get('/ping', (req, res) => res.send({message : 'pong'}))

app.listen(process.env.PORT || 3000, () => console.log(`Example app listening at http://localhost:${port}`))

