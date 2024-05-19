const mongoose = require('mongoose');

const summarySchema = new mongoose.Schema({
    nama_proses: {
        type: String,
        required: true
    },
    jumlah_pertama: {
        type: Number,
        required: true
    },
    jumlah_kedua: {
        type: Number,
        required: true
    },
    keterangan: {
        type: String,
        required: true
    }
});

const Summary = mongoose.model('Summary', summarySchema, 'Summaries');

module.exports = Summary;
