const mongoose = require('mongoose');
const Parking = mongoose.model('Parking');
const BookedSlots = mongoose.model('BookedSlots');
const pa = {};

pa.addParkingArea = async (req, res, next) => {
    try {

        let bookedSlotsCount = await BookedSlots.count();
        let parkedbookedSlotsCount = 0;
        if (bookedSlotsCount > 0) {
            parkedbookedSlotsCount = await BookedSlots.count({ isParked: true });
        }

        if (parkedbookedSlotsCount === 0 && bookedSlotsCount > 0) {
            const cc = await BookedSlots.collection.drop();
        }

        if (bookedSlotsCount > 0 && parkedbookedSlotsCount > 0) throw new Error('All slots need to be removed before creating new parking')
        if (req.body.length === undefined || req.body.breadth === undefined || req.body.minArea === undefined) throw new Error('Unexpected property mapping')

        let parking = await new Parking({
            length: req.body.length,
            breadth: req.body.breadth,
            min_area: req.body.minArea
        })

        if (!parking) throw new Error('Parking can\'t be created');

        parking.save();

        const noofslots = Math.floor(req.body.length * req.body.breadth / req.body.minArea);
        console.log(noofslots)
        const slots = [];

        for (let i = 0; i < noofslots; i++) {
            const mod = {
                slot: i,
                vnumber: '',
                isParked: false
            };
            slots.push(mod);
        }

        console.log(slots)

        await BookedSlots.insertMany(slots);

        res.json({
            success: true,
            data: { parking, slots: noofslots }
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

module.exports = pa;