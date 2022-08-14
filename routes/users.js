var express = require('express');
var router = express.Router();
var userService = require('../services/authService');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.create({
    username:"raihan",
    password:req.password
  }).catch({
    if(err){
      console.log(err);
    }
  })
});
router.get('/seed', userService.create);
module.exports = router;
