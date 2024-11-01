const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: 'Registered Successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        res.status(200).json({ message: 'Login Successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});


module.exports = router;

