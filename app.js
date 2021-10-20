var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// refrences /routes folder
var bookRouter = require('./routes/book');
var borrowRouter = require('./routes/borrow');
// var customerRouter = require('./routes/customer');

var app = express();

const basicAuth = require('express-basic-auth');
app.use(basicAuth({ authorizer: myAuthorizer, authorizeAsync: true, }))
// app.use(basicAuth({users: { 'admin': '1234' }}))
const dotenv = require('dotenv');
dotenv.config();

function myAuthorizer(username, password, callback) {
    if (username === process.env.auth_user && password === process.env.auth_pass) {
        return callback(null, true);
    }
    else {
        return callback(null, false);
    }
}

const helmet = require('helmet');
const cors = require('cors');

app.use(helmet());
app.use(cors());
app.use(logger('dev'));
// TODO: tsekkaa nää
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// TODO: tähän asti
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// actual url refrence
app.use('/book', bookRouter);
app.use('/borrow', borrowRouter);
// app.use('/customer', customerRouter);

module.exports = app;
