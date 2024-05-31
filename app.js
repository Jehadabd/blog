var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postRouter = require('./routes/post');

const mongoose=require('mongoose')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log('vary good')
}).catch((e)=>{
    console.log('oops')
})


app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/post', postRouter);
app.listen('5001')
module.exports = app;
