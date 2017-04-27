//dependencies
const passport = require('passport');
const Strategy = require('passport-http').BasicStrategy;

// Configure the Basic strategy for use by Passport.
//
// The Basic strategy requires a `verify` function which receives the
// credentials (`username` and `password`) contained in the request.  The
// function must verify that the password is correct and then invoke `cb` with
// a user object, which will be set at `req.user` in route handlers after
// authentication, but i pass true boolean value because user is hard coded

const appUserName = process.env.BASIC_AUTH_USERNAME || 'PrerenderMongooseCache'
const appPassword = process.env.BASIC_AUTH_PASSWORD || 'PrerenderM0ng00seC@che'

passport.use(new Strategy(
// verify function
  (username, password, cb) => {
    if(username !== appUserName || password !== appPassword) return cb(null, false);
    else return cb(null, true);
  }));

module.exports = passport;