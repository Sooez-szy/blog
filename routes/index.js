var express = require('express');
var router = express.Router();
var articleDao = require('../dao/articleDao');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.user){
    articleDao.queryAllCount(req,res,next)
  }else{
    res.render('index');
  }
});

//首页文章模板路由
router.route('/article').post(function(req, res, next) {
  articleDao.queryAll(req,res,next);
});

module.exports = router;
