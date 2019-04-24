const { prisma } = require('./generated/prisma-client')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.post('/user', async (req, res) => {
  const newUser = await prisma.createUser(req.body)
  res.json(newUser)
})

module.exports = app

