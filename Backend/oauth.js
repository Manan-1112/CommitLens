const passport = require('passport');
const GithubStrategy = require('passport-github2').Strategy;
module.exports = passport.use(new GithubStrategy({
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  function(accessToken, refreshToken, profile, done) {
  
  console.log("Profile:", profile);

  return done(null, profile);
}));