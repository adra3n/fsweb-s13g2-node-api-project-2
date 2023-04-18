// server için gerekli olanları burada ayarlayın

// posts router'ını buraya require edin ve bağlayın

const express = require('express')

const Posts = require('./posts/posts-model')
const postsRouter = require('./posts/posts-router')
server.use(express.json())

module.exports = server
