/*
 *模块引入
 */
var express = require('express')
//异地源访问
// var cors = require('cors')
//反向代理
// var proxy = require('http-proxy-middleware')
//引入路由
var router = require('./router')
var bodyParser = require('body-parser')
/*
 *插件使用
 */
//构建框架
var app = express()

//配置跨域请求2种方法，第一种cors策略
// app.use(cors({
//     origin:['http://localhost:8888'],
//     methods:['GET','POST'],
//     alloweHeaders:['Content-Type', 'Authorization']
// }));
//第二种设置响应头
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
　next();　
});
//配置body-parser解析post,放置在路由前
app.use(bodyParser.urlencoded({ entended: false}))
app.use(bodyParser.json())
//挂载路由
app.use(router)

var port = 8889

app.listen(8889, function(){
	console.log('Server is running and port is '+ port +'....................')
})