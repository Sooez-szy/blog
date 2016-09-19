/**
 * Created by Administrator on 2016/9/19.
 */
var user = {
    insert: 'INSERT INTO user(username, password,email,age,birthday, male, address,telephone) VALUES (?,?,?,?,?,?,?,?)',
    update: 'update user set username=?,password=?,email=?,age=?,birthday=?, male=?, create_time=?, update_time=?, is_delete=?, address=?,telephone=? where id=?',
    queryById: 'select * from user where id=?',
    queryAll: 'select * from user'
};
module.exports = user;