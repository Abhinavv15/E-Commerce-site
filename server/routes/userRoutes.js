const express = require('express');
const { createUser, getUsers, loginUser, getUserById } = require('../controllers/usercontroller');
const router = express.Router();

router.post('/signup', createUser);
router.post('/login', loginUser);
router.get('/users/:id', getUserById);
router.get('/users', getUsers); // Existing route

module.exports = router;
