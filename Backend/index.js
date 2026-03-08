require('dotenv').config()
const session = require('express-session');

const express=require("express")
const app=express()
const PORT=3000

const passport=require("./oauth")   

passport.serializeUser((user, done) => {
  // You can choose what gets stored in the session here.
  // Often just the user.id is enough.
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  // This is how you turn the session data back into a user object.
  done(null, obj);
});

app.use(session({
  secret: process.env.Secret_Key,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


app.get('/',(req,res)=>{
    return res.json({"msg":"Welcome to CommitLens"})
})


app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})