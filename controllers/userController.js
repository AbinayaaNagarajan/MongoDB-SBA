const User = require('../models/userModel');
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); 
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.create({ username, email }); 
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { username, email } = req.body;

  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { username, email },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//Update query.findOneAndUpdate(conditions, update, options) 
//await Model.updateOne({ foo: 'bar' }, { name: 'test' })
//Deleteone

const deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const deletedUser = await User.deleteOne({ _id: userId });

    if (deletedUser.deletedCount === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
