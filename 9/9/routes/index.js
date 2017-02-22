var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var dbconfig = require('./db');

//创建数据库连接
var connection = mysql.createConnection(dbconfig);

/* 访问首页. */
router.get('/', function(req, res, next) {
    res.sendfile('./public/bdnews/index.html');
});

/*通过分类获取新闻列表*/
router.get('/listNewsByType', function(req, res, next) {
    var type = req.query.typeText;
    // var data = "";
    connection.query("select * from news where news_classification = ?",[type],function(err,rows){
        // data= res.json(rows);
        res.json(rows);
    });
    // res.render("index",{
    //     title:'百度新闻',
    //     data:data
    // });
});

module.exports = router;

