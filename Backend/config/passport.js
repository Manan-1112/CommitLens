const passport = require('passport');
const GithubStrategy = require('passport-github2').Strategy;

passport.use(new GithubStrategy({
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  function(accessToken, refreshToken, profile, done) {

    const user = {
    githubId: profile.id,
    username: profile.username,
    accessToken: accessToken
  };

  return done(null, user);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;