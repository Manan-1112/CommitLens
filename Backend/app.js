const express = require("express");
const session = require("express-session");
const passport = require("passport");
require("./config/passport");
const authRoutes = require("./routes/auth.routes");

const repoRoutes = require("./routes/repo.routes");

const app = express();

app.use(express.json());

app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req,res)=>{
    res.json({msg:"Welcome to CommitLens"});
});

app.use("/auth", authRoutes);
app.use(repoRoutes);
module.exports = app;