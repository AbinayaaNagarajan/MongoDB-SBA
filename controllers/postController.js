const Post = require('../models/postModel');
const User = require('../models/userModel');

// Implement your CRUD operations here (GET, POST, PUT/PATCH, DELETE)
// Example functions:
const getAllPosts = async (req, res) => {
  try {
    console.log('Attempting to get all posts...');
    const posts = await Post.find();
    console.log('Received posts:', posts);
    res.json(posts);
  } catch (error) {
    console.error('Error getting posts:', error);
    res.status(500).json({ error: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content, authorid } = req.body;
    console.log('Received authorid:', authorid);

    // Assuming you have a User model
    let user;

    try {
      user = await User.findById(authorid);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
    } catch (userError) {
      return res.status(500).json({ error: userError.message });
    }

    const post = await Post.create({
      title,
      content,
      author: user._id,  // Use the ObjectId of the user
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const updatePost = async (req, res) => {
  const { postId } = req.params;
  const { title, content} = req.body;

  try {
    const updatedPost = await Post.findOneAndUpdate(
      { _id: postId }, //condition
      { title, content },
      {new : true}
      
    );

    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const deletePost = async (req, res) => {
  const { postId } = req.params;

  try {
    const deletedPost = await Post.deleteOne({ _id: postId });

    if (deletedPost.deletedCount === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: error.message });
  }
};



module.exports = {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  
};
