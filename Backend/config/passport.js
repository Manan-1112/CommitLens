const passport = require('passport');
const GithubStrategy = require('passport-github2').Strategy;


console.log(process.env.clientID,);
module.exports = passport.use(new GithubStrategy({
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  function(accessToken, refreshToken, profile, done) {

  return done(null, profile);
}));