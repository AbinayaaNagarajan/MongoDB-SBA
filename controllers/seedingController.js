const User = require('../models/userModel');
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

// Seed users
const seedUsers = async () => {
  try {
    await User.deleteMany(); // Clear existing users

    const users = await User.insertMany([
      { username: 'user1', email: 'user1@example.com' },
      { username: 'user2', email: 'user2@example.com' },
      { username: 'user3', email: 'user3@example.com' },
      { username: 'user4', email: 'user4@example.com' },
      { username: 'user5', email: 'user5@example.com' },
      { username: 'user6', email: 'user6@example.com' },
      { username: 'user7', email: 'user7@example.com' },
      { username: 'user8', email: 'user8@example.com' },
      { username: 'user9', email: 'user9@example.com' },
      { username: 'user10', email: 'user10@example.com' },
      { username: 'user11', email: 'user11@example.com' },


      // Add more user data as needed
    ]);

    console.log('Users seeded successfully:', users);
  } catch (error) {
    console.error('Error seeding users:', error.message);
  }
};

// Seed posts
const seedPosts = async () => {
  try {
    await Post.deleteMany(); // Clear existing posts

    const users = await User.find(); // Get all users to associate with posts

    const posts = await Post.insertMany([
      { title: 'Post 1', content: 'Content for post 1', author: users[0]._id },
      { title: 'Post 2', content: 'Content for post 2', author: users[1]._id },
      { title: 'Post 3', content: 'Content for post 3', author: users[2]._id },
      { title: 'Post 4', content: 'Content for post 4', author: users[3]._id },
      { title: 'Post 5', content: 'Content for post 5', author: users[4]._id },
      { title: 'Post 6', content: 'Content for post 6', author: users[5]._id },
      { title: 'Post 7', content: 'Content for post 7', author: users[6]._id },
      { title: 'Post 8', content: 'Content for post 8', author: users[7]._id },
      { title: 'Post 9', content: 'Content for post 9', author: users[8]._id },
      { title: 'Post 10', content: 'Content for post 10', author: users[9]._id },

      // Add more post data as needed
    ]);

    console.log('Posts seeded successfully:', posts);
  } catch (error) {
    console.error('Error seeding posts:', error.message);
  }
};

// Seed comments
const seedComments = async () => {
  try {
    await Comment.deleteMany(); // Clear existing comments

    const users = await User.find(); // Get all users to associate with comments
    const posts = await Post.find(); // Get all posts to associate with comments

    const comments = await Comment.insertMany([
      { text: 'Comment 1', author: users[0]._id, post: posts[0]._id },
      { text: 'Comment 2', author: users[1]._id, post: posts[1]._id },
      { text: 'Comment 3', author: users[2]._id, post: posts[2]._id },
      { text: 'Comment 4', author: users[3]._id, post: posts[3]._id },
      { text: 'Comment 5', author: users[4]._id, post: posts[4]._id },
      { text: 'Comment 6', author: users[5]._id, post: posts[5]._id },
      { text: 'Comment 7', author: users[6]._id, post: posts[6]._id },
      { text: 'Comment 8', author: users[7]._id, post: posts[7]._id },
      { text: 'Comment 9', author: users[8]._id, post: posts[8]._id },
      { text: 'Comment 10', author: users[9]._id, post: posts[9]._id },

      // Add more comment data as needed
    ]);

    console.log('Comments seeded successfully:', comments);
  } catch (error) {
    console.error('Error seeding comments:', error.message);
  }
};

// Combine all seeding functions into a single function
const seedDatabase = async ( req, res) => {
  await seedUsers();
  await seedPosts();
  await seedComments();
  res.json("Seeding");
};
module.exports = {
  seedDatabase,
};
