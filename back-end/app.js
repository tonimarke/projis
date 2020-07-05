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


const acao = require('./routes/acao')
app.use('/acao', acao)

const estagiario = require('./routes/estagiario')
app.use('/estagiario', estagiario)

const pcontraria = require('./routes/pcontraria')
app.use('/pcontraria', pcontraria)

const supervisor = require('./routes/supervisor')
app.use('/supervisor', supervisor)

const usuario = require('./routes/usuario')
app.use('/usuario', usuario)

module.exports = app;
