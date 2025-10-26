const express = require('express')
const cors = require('cors')

const server = express()

// Middlewares
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

module.exports = server