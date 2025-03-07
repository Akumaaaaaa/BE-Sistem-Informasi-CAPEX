const express = require('express');
const router = express.Router();
const Pekan = require('../models/pekan');
const authMiddleware = require('../middlewares/authmiddleware');

// Create a Pekan
router.post('/', authMiddleware, async (req, res) => {
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

// Read all Pekan
router.get('/', authMiddleware, async (req, res) => {
    try {
        const pekan = await Pekan.find();
        res.json(pekan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Read a single Pekan
router.get('/:id', authMiddleware, async (req, res) => {
    try {
        const pekan = await Pekan.findById(req.params.id);
        if (!pekan) {
            return res.status(404).json({ message: 'Pekan not found' });
        }
        res.json(pekan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a Pekan
router.put('/:id', authMiddleware, async (req, res) => {
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

// Delete a Pekan
router.delete('/:id', authMiddleware, async (req, res) => {
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
