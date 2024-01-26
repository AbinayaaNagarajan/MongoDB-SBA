const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, updateUser, deleteUser } = require('../controllers/users');

// GET all users
router.get('/', getAllUsers);

// POST a new user
router.post('/', createUser);

// PUT/UPDATE an existing user
router.put('/:userId', updateUser);

// PATCH/UPDATE an existing user
router.patch('/:userId', updateUser);

// DELETE a user
router.delete('/:userId', deleteUser);

// GET details of a specific user
router.get('/:userId', getUser);

module.exports = router;
