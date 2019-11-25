const mongoose = require('mongoose');

const bookedSlotsSchema = new mongoose.Schema(
    {
        slot: {
            type: Number,
            required: true,
            unique: true,
            default: 10
        },
        vnumber: {
            type: String
        },
        isParked: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        timestamps: true,
        autoIndex: true
    }
);
bookedSlotsSchema.index({ slot: 1 });
const BookedSlots = mongoose.model('BookedSlots', bookedSlotsSchema, 'bookedSlots');
module.exports = BookedSlots;
