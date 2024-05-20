const mongoose = require('mongoose');

const pekanSchema = new mongoose.Schema({
    tanggal_pertama: {
        type: Date,
        required: true
    },
    tanggal_kedua: {
        type: Date,
        required: true
    }
});

const Pekan = mongoose.model('Pekan', pekanSchema, 'Pekan');

module.exports = Pekan;
