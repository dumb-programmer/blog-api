const passport = require("passport");
const { Strategy: JSONStrategy, ExtractJwt } = require("passport-jwt");

const User = require("../models/user");

passport.use(new JSONStrategy({ jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: process.env.SECRET }, async (payload, done) => {
    try {
        const user = await User.findById(payload.id);
        if (user) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    }
    catch (err) {
        done(err, false);
    }
}));

module.exports = passport.authenticate("jwt", { session: false });