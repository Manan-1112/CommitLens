const passport = require('passport');
const GithubStrategy = require('passport-github2').Strategy;

passport.use(new GithubStrategy({
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    console.log("ACCESS TOKEN:", accessToken);
    console.log("PROFILE:", profile);

  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

module.exports = passport;