const mongoose = require('mongoose');

const pekanSchema = new mongoose.Schema({
    tanggal_pertama: {
        type: String,
        required: true
    },
    tanggal_kedua: {
        type: String,
        required: true
    }
});

const Pekan = mongoose.model('Pekan', pekanSchema, 'Pekan');

module.exports = Pekan;
