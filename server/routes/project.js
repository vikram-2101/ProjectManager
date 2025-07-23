const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const { authMiddleware } = require('../controllers/authController');

// All routes require authentication
router.use(authMiddleware());

router.post('/', projectController.createProject); // Admin only
router.get('/', projectController.getProjects); // All members
router.get('/:id', projectController.getProjectById); // Member of project
router.put('/:id', projectController.updateProject); // Admin only
router.delete('/:id', projectController.deleteProject); // Admin only
router.post('/:id/add-member', projectController.addMember); // Admin only

module.exports = router;