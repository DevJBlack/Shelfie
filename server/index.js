const express = require('express')
const massive = require('massive')
require('dotenv').config()

const app = express()
const port = 4400

app.use(express.json())

app.listen(port, () => {
  console.log("listening on port", port)
})