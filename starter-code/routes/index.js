const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  console.log('Hit the index home page');
  res.render('index');
});

module.exports = router;
