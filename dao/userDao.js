/**
 * Created by Administrator on 2016/9/19.
 */
var mysql = require('mysql');
var db = require('../connection/db');
var sql = require('./userDao');
var _ =require('lodash');

//创建数据库连接池
var pool = mysql.createPool(db.mysql);

module.exports = {
    add: function (req, res, next) {
        pool.getConnection(function(err,connection){
            var param = req.body;


        })
    }


};





