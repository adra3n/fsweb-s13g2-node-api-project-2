// posts için gerekli routerları buraya yazın
const express = require('express')

const router = express.Router()

const postModel = require('./posts-model')

router.get('/', async (req, res) => {
  try {
    const posts = await postModel.find()
    res.json(posts)
  } catch (error) {
    res.status(500).json()
  }
})

router.get('/:id', async (req, res) => {
  try {
    if (!post) {
      res.status(404).json()
    } else {
      res.json(post)
    }
  } catch (error) {
    res.status(500).json()
  }
})

router.post('/', async (req, res) => {
  try {
    const { title, contents } = req.body
    if (!title || !contents) {
      res.status(400).json({ message: '' })
    } else {
      const insertedId = await postModel.insert({
        title: title,
        contents: contents,
      })
      const insertedPost = await postModel.findById(insertedID)
      res.status(201).json(insertedPost)
    }
  } catch (error) {
    res.status(500).json()
  }
})

module.exports = router
