const mongoose = require('mongoose');

const pekanSchema = new mongoose.Schema({
    tanggal_pertama: {
        type: String,
        required: true,
        set: function(value) {
          return value ? value.split('/').reverse().join('-') : value;
        }
    },
    tanggal_kedua: {
        type: String,
        required: true,
        set: function(value) {
          return value ? value.split('/').reverse().join('-') : value;
        }
    }
});

const Pekan = mongoose.model('Pekan', pekanSchema, 'Pekan');

module.exports = Pekan;
