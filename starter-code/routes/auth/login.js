const express = require('express');
const router  = express.Router();

/* GET user login page */
router.get('/', (req, res, next) => {
  console.log('Hit the login page!');
  res.render('login');
});

module.exports = router;
