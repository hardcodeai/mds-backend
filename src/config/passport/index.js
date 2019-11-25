module.exports = () => {
    const passport = require('passport');
    passport.use("bearer", require('./jwt'));
    passport.use("local", require('./local'));
};
