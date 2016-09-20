var express = require('express');
var router = express.Router();
var userDao = require('../../dao/userDao');

//登录页面GET路由
router.route('/login').get(function(req, res, next) {
        res.render('login');
});

//注册路由
router.route('/register').post(function(req,res,next){
    userDao.add(req, res, next);
});

//登录路由
router.route('/loginUp').get(function(req,res,next){
    userDao.queryName(req, res, next);
});

//注销路由
router.route('/logout').get(function(req, res, next) {
    req.session.user = null;
    res.redirect('/login');
});

module.exports = router;