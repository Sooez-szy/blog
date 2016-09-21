/**
 * Created by Administrator on 2016/9/20.
 */
var mysql = require('mysql');
var db = require('../connection/db');
var sql = require('./articleSqlMapping');
var session = require('express-session');
var _ =require('lodash-node');
var Article = require('../model/article');
//创建数据库连接池
var pool = mysql.createPool(db.mysql);


module.exports = {
    queryAll: function (req, res, next) {
        var param = req.body;
        pool.getConnection(function (err, connection) {
            sql.queryAll,
                connection.query(
                [req.session.user.username,parseInt(param.pageNo),parseInt(param.pageSize)],
                function (err, rows) {
                    if (err) {
                        console.log('query err' + err)
                    } else {
                        res.render('articleTemplete',{articles:rows});
                    }
                    connection.release();
                }
            )
        });
    },
    queryAllCount:function(req,res,next){
        pool.getConnection(function (err, connection) {
            connection.query(
                sql.queryAllCount,
                [req.session.user.username],
                function (err, rows) {
                    if (err) {
                        console.log('query err' + err)
                    } else {
                        res.render('index',{user:req.session.user,count:rows[0]['count(0)']});
                    }
                    connection.release();
                }
            )
        });
    }
};