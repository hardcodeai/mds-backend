const mongoose = require('mongoose');
const BookedSlots = mongoose.model('BookedSlots');
const bs = {};

bs.updateBookedSlot = async (req, res, next) => {
    try {
        const ud = await BookedSlots.findOneAndUpdate({ slot: req.body.slot }, req.body, { new: true }).lean();
        if (!ud) throw new Error('Data cant be updated.')
        res.json({
            success: true,
            data: ud
        })
    } catch (error) {
        res.json({
            success: false,
            data: {
                error: true,
                message: error.message
            }
        })
    }
}


bs.getBookedSlots = async (req, res, next) => {
    try {
        const bookedSlots = await BookedSlots.find({})
        if (!bookedSlots) throw new Error('Slots wern\'t found');

        res.json({
            success: true,
            data: bookedSlots
        })
    } catch (error) {
        res.json({
            success: false,
            data: {
                error: true,
                message: error.message
            }
        })
    }
}

module.exports = bs;