const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const secretKey = '1234'; // Store this securely

// Mock database (in-memory)
let users = [];

// Add new user
app.post('/users', async (req, res) => {
    let { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please provide name, email, and password' });
    }

    let user = users.find(u => u.email === email);
    if (user) {
        return res.status(400).json({ message: 'User already exists' });
    }

    let hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
        id: users.length + 1,
        name: name,
        email: email,
        password: hashedPassword,
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

// Login
app.post('/login', (req, res) => {
    let { username, password } = req.body;

    let user = users.find(u => u.email === username);
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user.id, username: user.name }, secretKey, {
            expiresIn: '1h',
        });

        return res.json({ message: 'Login successful', token });
    } else {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Middleware to verify JWT
const authenticateJWT = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (token) {
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.status(403).json({ message: 'Token is not valid' });
            }
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json({ message: 'Token is missing' });
    }
};

// Get all users (Protected)
app.get('/users', authenticateJWT, (req, res) => {
    res.json(users);
});

// Get user by ID (Protected)
app.get('/users/:id', authenticateJWT, (req, res) => {
    let id = parseInt(req.params.id);
    let user = users.find(u => u.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Update user by ID (Protected)
app.put('/users/:id', authenticateJWT, (req, res) => {
    let userId = parseInt(req.params.id);
    let { name, email } = req.body;
    const user = users.find(u => u.id === userId);

    if (user) {
        user.name = name || user.name;
        user.email = email || user.email;
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Delete user by ID (Protected)
app.delete('/user/:id', authenticateJWT, (req, res) => {
    let userId = parseInt(req.params.id);
    let userIndex = users.findIndex(u => u.id === userId);

    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Start the server
app.listen(8000, () => {
    console.log('Server running on port 8000');
});