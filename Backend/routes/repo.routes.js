const router = require('express').Router();
const repoController = require('../controllers/repo.controller');

router.get("/repo", repoController.getRepos);

module.exports = router;