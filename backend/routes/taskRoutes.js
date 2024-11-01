const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const { isAuthenticated } = require('../middleware/authMiddleware'); // Assuming you have an auth middleware

// Debugging: Check if createTask is correctly imported
console.log(taskController.createTask); // This should log a function, if imported correctly

// Create a new task
router.post('/', isAuthenticated, taskController.createTask);

// Get all tasks
router.get('/', isAuthenticated, taskController.getAllTasks);

// Update a task
router.put('/:id', isAuthenticated, taskController.updateTask);

// Delete a task
router.delete('/:id', isAuthenticated, taskController.deleteTask);


module.exports = router;

