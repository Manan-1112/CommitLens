const router = require("express").Router();
const passport = require("passport");
const authController = require("../controllers/auth.controller");


router.get('/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    
    res.redirect('/auth/success');
  });
  

router.get("/success", authController.loginSuccess);

router.get("/me", authController.getCurrentUser);

router.get("/logout", authController.logout);



module.exports = router;