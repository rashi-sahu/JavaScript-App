const express = require('express')
const app = express()

app.get('/ping', (req, res) => res.send({message : 'pong'}))
app.get('/pong', (req, res) => res.send({message : 'ping'}))

app.listen(process.env.PORT || 3000, () => console.log(`Example app listening at http://localhost:${process.env.PORT || 3000}`))

