const express = require('express');
const router = express.Router();
const Pekan = require('../models/pekan');
const authMiddleware = require('../middlewares/authmiddleware');

// Create a pekan (Only admin)
router.post('/pekans', authMiddleware, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access Denied: Only admin can perform this action' });
    }
    
    try {
        const pekan = new Pekan(req.body);
        await pekan.save();
        res.status(201).json(pekan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Read all pekans (Authenticated users)
router.get('/pekans', authMiddleware, async (req, res) => {
    try {
        const pekans = await Pekan.find();
        res.json(pekans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a pekan (Only admin)
router.put('/pekans/:id', authMiddleware, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access Denied: Only admin can perform this action' });
    }

    try {
        const pekan = await Pekan.findById(req.params.id);
        if (!pekan) {
            return res.status(404).json({ message: 'Pekan not found' });
        }
        Object.assign(pekan, req.body);
        await pekan.save();
        res.json(pekan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a pekan (Only admin)
router.delete('/pekans/:id', authMiddleware, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access Denied: Only admin can perform this action' });
    }

    try {
        const pekan = await Pekan.findById(req.params.id);
        if (!pekan) {
            return res.status(404).json({ message: 'Pekan not found' });
        }
        await Pekan.deleteOne({ _id: req.params.id });
        res.json({ message: 'Pekan deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
