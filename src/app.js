const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

//init middware
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
//init db
require('./dbs/connectDb')
// const {overLoad} = require('./helpers/checkConnect')
// overLoad();
//handing error

module.exports = app;