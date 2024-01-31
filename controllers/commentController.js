const Comment = require('../models/commentModel');

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
    const { text, author, post } = req.body;
    const comment = await Comment.create({ text, author, post });
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// other functions...

module.exports = {
  getAllComments,
  createComment,
  // other exported functions...
};
