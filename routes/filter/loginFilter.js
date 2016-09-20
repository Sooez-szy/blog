/**
 * Created by Administrator on 2016/9/20.
 */
function loginFilter(req,res,next){
    return function(req,res,next){
        var  url = req.originalUrl;
        if(url.indexOf('login')==-1 && !req.session.user) {
            return res.redirect("/login");
        }else{
            if(url.indexOf('login')!==-1 && req.session.user){
                return res.redirect("/")
            }else{
                next();
            }
        }
    }
}

module.exports = loginFilter;