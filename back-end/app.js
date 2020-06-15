var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

const cors = require('cors')
app.use(cors())

const db = require('./config/database')
db('mongodb://localhost:27017/projisDB')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


const action = require('./routes/action')
app.use('/action', action)

const customer = require('./routes/customer')
app.use('/customer', customer)

const intern = require('./routes/intern')
app.use('/intern', intern)

const opponent = require('./routes/opponent')
app.use('/opponent', opponent)

const supervisor = require('./routes/supervisor')
app.use('/supervisor', supervisor)


module.exports = app;
