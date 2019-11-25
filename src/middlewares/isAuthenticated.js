const passport = require("passport");

module.exports = (req, res, next) => {
    console.log('checking if the user is authenticated.')

    passport.authenticate("bearer", (err, user) => {
        try {
            console.log(err)
            console.log(user)
            if (!user) {
                res.status(403);
                return res.json({ message: 'INVALID_ATTEMPT' });
            }

            req.user = user;
            console.log('user authenticated.');
            next();

        } catch (error) {
            next(error);
        }
    })(req, res, next);
};