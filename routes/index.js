const express = require('express');
const router = express.Router();
const { ensureAuthenticated, stillAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', stillAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

module.exports = router;
