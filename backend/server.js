const express = require('express');
const mongoose = require('mongoose');
const app = express();
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/authRoutes'); 
const cors = require('cors');
app.use(cors());  // Enable all CORS request

app.use(express.json()); // Parse JSON request bodies

// MongoDB connection
mongoose.connect('your_mongodb_connection_string', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Using the task routes
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes); // user routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
