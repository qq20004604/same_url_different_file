var express = require('express');
var router = express.Router();

function isMobile (agent) {
    return /(iphone|ipod|ipad|android)/.test(agent.toLowerCase())
}

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log(req.headers['user-agent'])
    var title
    if (isMobile(req.headers['user-agent'])) {
        title = '移动端'
    } else {
        title = 'PC端'
    }
    res.render('index', {title: title});
});

module.exports = router;
