const mongoose = require('mongoose');
const User = mongoose.model('User');
const us = {};

us.addUser = async (req, res, next) => {

    try {
        if (req.body.email === undefined || req.body.password === undefined) throw new Error('Unexpected property mapping')

        let user = await new User({
            fullname: req.body.fullname,
            email: req.body.email,
            password: req.body.password
        })

        if (!user) throw new Error('User can\'t be created');

        user.save();

        res.json({
            success: true,
            data: user
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

module.exports = us;