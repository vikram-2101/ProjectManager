const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { authMiddleware } = require('../controllers/authController');

router.use(authMiddleware());

router.post('/', commentController.addComment);
router.get('/task/:taskId', commentController.getCommentsByTask);

module.exports = router;