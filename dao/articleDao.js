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
        pool.getConnection(function (err, connection) {
            connection.query(
                sql.queryAll,
                [],
                function (err, rows) {
                    if (err) {
                        console.log('query err' + err)
                    } else {

                    }
                }
            )
        });
    }
};