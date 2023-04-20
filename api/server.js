// server için gerekli olanları burada ayarlayın

// posts router'ını buraya require edin ve bağlayın

const express = require('express')
const server = express()

const posts = require('./posts/posts-model')
const postRouter = require('./posts/posts-router')
server.use(express.json())
server.use(cors())

module.exports = server
