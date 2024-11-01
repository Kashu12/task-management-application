const Task = require('../models/Task');

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const { title, description, dueDate, priority, assignedTo, category } = req.body;
        
        // Create new task instance
        const task = new Task({ title, description, dueDate, priority, assignedTo, category });
        await task.save(); // Save the task to the database

        res.status(201).json({ message: 'Task created successfully', task });
    } catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
    }
};

// Get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().populate('assignedTo', 'name email'); // Populate assignedTo with User details
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error });
    }
};

// Update a task
exports.updateTask = async (req, res) => {
    const { id } = req.params; // Get the task ID from the request params
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task updated successfully', updatedTask });
    } catch (error) {
        res.status(500).json({ message: 'Error updating task', error });
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    const { id } = req.params; // Get the task ID from the request params
    try {
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error });
    }
};

