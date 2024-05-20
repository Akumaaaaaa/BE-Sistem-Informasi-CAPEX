const mongoose = require('mongoose');

const dataCapexSchema = new mongoose.Schema({
    nama_bidang: {
        type: String,
        required: true
    },
    nilai_pengajuan: {
        type: Number,
        required: true
    },
    approved_bp: {
        type: Number,
        required: true
    },
    im_amount: {
        type: Number,
        required: true
    },
    pr_amount: {
        type: Number,
        required: true
    },
    po_amount: {
        type: Number,
        required: true
    },
    vowd_incomplete: {
        type: Number,
        required: true
    },
    vowd_complete: {
        type: Number,
        required: true
    },
    pengajuan_claim: {
        type: Number,
        required: true
    },
    pembayaran_claim: {
        type: Number,
        required: true
    }
});

const DataCapex = mongoose.model('DataCapex', dataCapexSchema, 'DataCapex');

module.exports = DataCapex;
