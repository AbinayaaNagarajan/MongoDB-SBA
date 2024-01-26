const Comment = require('../models/comment');

// Get all comments
exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate('author post');
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new comment
exports.createComment = async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a specific comment by ID
exports.getComment = async (req, res) => {
  const { commentId } = req.params;
  try {
    const comment = await Comment.findById(commentId).populate('author post');
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an existing comment
exports.updateComment = async (req, res) => {
  const { commentId } = req.params;
  try {
    const updatedComment = await Comment.findByIdAndUpdate(commentId, req.body, { new: true });
    if (!updatedComment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    res.json(updatedComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a comment
exports.deleteComment = async (req, res) => {
  const { commentId } = req.params;
  try {
    const deletedComment = await Comment.findByIdAndDelete(commentId);
    if (!deletedComment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    res.json(deletedComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
