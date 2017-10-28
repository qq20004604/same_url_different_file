# same_url_different_file
相同的url，移动端和pc端访问会输出不同的内容

安装

```javascript
npm install
```

运行

```javascript
npm start
```

核心点是：``routes/index.js`` 这个文件，下面这段逻辑：

```javascript
if (isMobile(req.headers['user-agent'])) {
    title = '移动端'
} else {
    title = 'PC端'
}
```

通过``user-agent``来判断是移动端，还是pc端。

判断函数是通过关键字来正则匹配判断：

```javascript
function isMobile (agent) {
    return /(iphone|ipod|ipad|android)/.test(agent.toLowerCase())
}
```

访问链接：http://127.0.0.1:3000/