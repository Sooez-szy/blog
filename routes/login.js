var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');


/* GET home page. */
router.route('/login').get(function(req, res, next) {
    res.render('login');
}).post(function(req,res,next){
    userDao.add(req, res, next);
});

module.exports = router;