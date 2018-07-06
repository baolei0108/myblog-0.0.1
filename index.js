const path = require('path')

const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')

app.set('views', path.join(__dirname, 'views')) //设置存放模板文件的目录
app.set('view engine', 'ejs') //设置模板引擎为ejs


app.use('/', indexRouter)
app.use('/users', userRouter)


app.use(function(req, res, next) {
    console.log('1')
    next()

})

app.use(function(req, res, next) {
    console.log('2')
    res.status(200).end()

})


app.listen(3000, function() {
    console.log('监听3000端口');
})