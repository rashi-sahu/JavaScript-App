const express = require('express')
const app = express()
const port = 3000

app.get('/ping', (req, res) => res.send({message : 'pong'}))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))