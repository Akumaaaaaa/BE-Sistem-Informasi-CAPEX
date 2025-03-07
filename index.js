const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./config/db');
const authRoutes = require('./routes/authroutes');
const dataRoutes = require('./routes/dataroutes');
const summaryRoutes = require('./routes/summaryroutes')
const pekanRoutes = require('./routes/pekanroutes');
const dataCapexRoutes = require('./routes/datacapexroutes');
const authMiddleware = require('./middlewares/authmiddleware');
const PORT = process.env.PORT || 3000;

app.use(express.json());

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

// Use CORS middleware
app.use(cors());

// Routes
app.use('/auth', authRoutes);
app.use('/summary', summaryRoutes);
app.use('/pekan', pekanRoutes);
app.use('/dataCapex', authMiddleware, dataCapexRoutes);
app.use('/data', authMiddleware, dataRoutes);
