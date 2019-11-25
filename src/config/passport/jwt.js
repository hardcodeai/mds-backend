var BearerStrategy = require('passport-http-bearer').Strategy;
const mongoose = require("mongoose");
const User = mongoose.model('User');
const passport = require('passport');
const jwt = require('jsonwebtoken');

module.exports = new BearerStrategy(
    async function (token, done) {
        const decodedToken = await jwt.verify(token, 'secret');
        if (!decodedToken) return done(null, false);
        let user = await User.findById({ _id: decodedToken.id });
        if (!user) return done(null, false);
        done(null, user, { scope: 'all' });
    }
);