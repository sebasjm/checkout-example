const { prisma } = require('./generated/prisma-client')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

app.post('/user', async (req, res) => {
  const newUser = await prisma.createUser(req.body)
  res.json(newUser)
})

module.exports = app

