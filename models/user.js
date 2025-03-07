const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['karyawan', 'admin'],
        default: 'karyawan'
    }
});

const User = mongoose.model('User', userSchema, 'Users');

module.exports = User;