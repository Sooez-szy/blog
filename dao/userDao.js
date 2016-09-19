/**
 * Created by Administrator on 2016/9/19.
 */
var mysql = require('mysql');
var db = require('../connection/db');
var sql = require('./userSqlMapping');
var _ =require('lodash-node');
var User = require('../model/user');
//创建数据库连接池
var pool = mysql.createPool(db.mysql);

module.exports = {
    //保存用户方法
    add: function (req, res, next) {
        pool.getConnection(function(err,connection){
            var param = req.body;
            var paramArray = _.values(param);
            var user = new User();
            for(var key in param){
                user[key] = param[key];
            }
            connection.query(
                sql.insert,
                [user.username, user.password,user.email,user.age,user.birthday, user.male, user.address,user.telephone],
                function(err,result){
                    if(err){
                        console.log('add err:' + err);
                        res.send('fail');
                    }else{
                        res.send('success');
                    }
                    connection.release();
                }
            )
        })
    }
};





