const express = require('express');
const app = express()
const db = require('./config/db');
const authRoutes = require('./routes/authroutes');
const authMiddleware = require('./middlewares/authmiddleware');
const PORT = process.env.PORT || 3000

app.use(express.json())

// Connect to MongoDB
db.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log('Server Listening on Port ' + PORT);
    });
})
.catch((err) => {
    console.log(err);
});

// Routes
app.use('/auth', authRoutes);

// Middleware to validate tokens
app.use(authMiddleware);