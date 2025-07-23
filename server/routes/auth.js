const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register
router.post('/register', authController.register);
// Login
router.post('/login', authController.login);

// Example protected route (Admin only)
router.get('/admin', authController.authMiddleware(['Admin']), (req, res) => {
  res.json({ message: 'Welcome, Admin!' });
});

// Example protected route (Admin or Team Member)
router.get('/team', authController.authMiddleware(['Admin', 'Team Member']), (req, res) => {
  res.json({ message: `Welcome, ${req.user.role}!` });
});

module.exports = router;