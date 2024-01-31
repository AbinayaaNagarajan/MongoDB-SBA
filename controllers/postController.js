const Post = require('../models/postModel');

// Implement your CRUD operations here (GET, POST, PUT/PATCH, DELETE)
// Example functions:
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const post = await Post.create({ title, content, author });
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// other functions...

module.exports = {
  getAllPosts,
  createPost,
  // other exported functions...
};
