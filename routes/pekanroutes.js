const express = require('express');
const router = express.Router();
const Pekan = require('../models/pekan');
const authMiddleware = require('../middlewares/authmiddleware');

// Helper function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

// Create a Pekan
router.post('/', authMiddleware, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access Denied: Only admin can perform this action' });
    }

    try {
        const tanggal_pertama = formatDate(req.body.tanggal_pertama);
        const tanggal_kedua = formatDate(req.body.tanggal_kedua);

        const pekan = new Pekan({ tanggal_pertama, tanggal_kedua });
        await pekan.save();
        res.status(201).json(pekan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a Pekan
router.put('/:id', authMiddleware, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access Denied: Only admin can perform this action' });
    }

    try {
        const tanggal_pertama = formatDate(req.body.tanggal_pertama);
        const tanggal_kedua = formatDate(req.body.tanggal_kedua);

        const pekan = await Pekan.findById(req.params.id);
        if (!pekan) {
            return res.status(404).json({ message: 'Pekan not found' });
        }
        
        pekan.tanggal_pertama = tanggal_pertama;
        pekan.tanggal_kedua = tanggal_kedua;
        
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
