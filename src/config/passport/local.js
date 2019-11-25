const LocalStrategy = require('passport-local').Strategy

const mongoose = require('mongoose');
const User = mongoose.model('User');

const LOCAL_OPTS = {
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
}

const LOCAL_AUTH = async (req, userEmail, password, done) => {
    console.log('dcnj')
    if (!password && !userEmail) {
        done(null, false, { message: 'pls enter all details' });
    }

    const user = await User.findOne({ email: userEmail });
    if (!user) {
        return done(null, false, { message: 'USER_NOT_FOUND' });
    }

    if (!(user.password === password)) {
        return done(null, false, { message: 'PASSWORD_WRONG' });
    }
    return done(null, user);
}

const localStrategy = new LocalStrategy(LOCAL_OPTS, LOCAL_AUTH);
module.exports = localStrategy;