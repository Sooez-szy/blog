/**
 * Created by Administrator on 2016/9/20.
 */
var article = {
    queryAll: "SELECT t.id,t.title,t.description,t.content,t.img,t.author,t.create_time FROM article t"+
    " JOIN user u ON u.username = t.author "+
    " WHERE t.is_delete = 0 AND t.author=? "+
    " ORDER BY t.create_time "+
    " LIMIT ?,? ",
    queryAllCount:'SELECT count(0) FROM article a JOIN user u ON u.username = a.author WHERE a.is_delete = 0 AND a.author=?',
    queryById:'SELECT * FROM article WHERE id = ?'
}

module.exports = article;