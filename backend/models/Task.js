const mongoose = require('mongoose');

// Define the task schema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Title is mandatory
    },
    description: {
        type: String,
        required: true, // Description is mandatory
    },
    dueDate: {
        type: Date,
        required: false, // Due date is optional
    },
    status: {
        type: String,
        enum: ['backlog', 'to-do', 'in-progress', 'done'], // Possible status values
        default: 'backlog', // Default status is 'backlog'
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'], // Possible priority values
        default: 'medium', // Default priority is 'medium'
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true, // Assigned user is mandatory
    },
    category: {
        type: String,
        required: false, // Task category is optional
    },
}, {
    timestamps: true, // Automatically creates createdAt and updatedAt fields
});

// Create the Task model
const Task = mongoose.model('Task', taskSchema);

module.exports = Task; // Export the Task model
