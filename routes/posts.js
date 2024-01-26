const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
} = require('../controllers/posts');

// GET all posts
router.get('/', getAllPosts);

// POST a new post
router.post('/', createPost);

// GET a specific post
router.get('/:postId', getPost);

// PUT/UPDATE an existing post
router.put('/:postId', updatePost);

// DELETE a post
router.delete('/:postId', deletePost);

module.exports = router;
