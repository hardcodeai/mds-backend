const mongoose = require('mongoose');

const parkingSchema = new mongoose.Schema(
    {
        length: {
            type: Number,
            required: true,
            default: 10
        },
        breadth: {
            type: Number,
            required: true,
            default: 10
        },
        min_area: {
            type: Number,
            required: true,
            default: 10
        }
    },
    {
        timestamps: true,
        autoIndex: true
    }
);

const Parking = mongoose.model('Parking', parkingSchema, 'parking');


// Parking.insertMany([{
//     length: 1235,
//     breadth: 1235,
//     min_area: 1235,
// }])

module.exports = Parking;
