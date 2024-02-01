const Comment = require('../models/commentModel');
const Post = require('../models/postModel');
const User = require('../models/userModel');

// Implement your CRUD operations here (GET, POST, PUT/PATCH, DELETE)
// Example functions:
const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createComment = async (req, res) => {

  
  try {
  const { text, authorId, postId } = req.body;

   let author = await User.findById(authorId);
   let post = await Post.findById(postId);


   // const { text, authorId, postId } = req.body;
    const comment = await Comment.create({ text, author, post });
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateComment = async (req, res) => {
  const { commentId } = req.params;
  const { text} = req.body;

  try {
    const updatedComment = await Comment.findOneAndUpdate(
      { _id: commentId },
      { text },
      { new: true }
    );

    if (!updatedComment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    res.json(updatedComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteComment = async (req, res) => {
  const { commentId } = req.params;

  try {
    const deletedComment = await Comment.deleteOne({ _id: commentId });

    if (deletedComment.deletedCount === 0) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllComments,
  createComment,
  updateComment,
  deleteComment,
  // other exported functions...
};
