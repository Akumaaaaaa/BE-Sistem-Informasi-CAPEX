const express = require('express');
const router = express.Router();
const Summary = require('../models/summary');

// Create a summary (Only admin)
router.post('/summaries', async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access Denied: Only admin can perform this action' });
    }
    
    try {
        const summary = new Summary(req.body);
        await summary.save();
        res.status(201).json(summary);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Read all summaries (Authenticated users)
router.get('/summaries', async (req, res) => {
    try {
        const summaries = await Summary.find();
        res.json(summaries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a summary (Only admin)
router.put('/summaries/:id', async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access Denied: Only admin can perform this action' });
    }

    try {
        const summary = await Summary.findById(req.params.id);
        if (!summary) {
            return res.status(404).json({ message: 'Summary not found' });
        }
        Object.assign(summary, req.body);
        await summary.save();
        res.json(summary);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a summary (Only admin)
router.delete('/summaries/:id', async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access Denied: Only admin can perform this action' });
    }

    try {
        const summary = await Summary.findById(req.params.id);
        if (!summary) {
            return res.status(404).json({ message: 'Summary not found' });
        }
        await Summary.deleteOne({ _id: req.params.id });
        res.json({ message: 'Summary deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
