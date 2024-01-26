const express = require('express');
const router = express.Router();
const {
  getAllComments,
  createComment,
  getComment,
  updateComment,
  deleteComment,
} = require('../controllers/comments');

// GET all comments
router.get('/', getAllComments);

// POST a new comment
router.post('/', createComment);

// GET a specific comment
router.get('/:commentId', getComment);

// PUT/UPDATE an existing comment
router.put('/:commentId', updateComment);

// DELETE a comment
router.delete('/:commentId', deleteComment);

module.exports = router;
