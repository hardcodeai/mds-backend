const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            trim: true,
            default: ''
        },
        email: {
            type: String,
            trim: true,
            required: true,
            lowercase: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            // minlength: 8
        }
    },
    {
        timestamps: true,
        autoIndex: true
    }
);

const User = mongoose.model('User', userSchema, 'users');

// User.insertMany([{
//     password: '1352',
//     email: 'ab@ab.com'
// }])

module.exports = User;
