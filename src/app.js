const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
require('dotenv').config();
const app = express();

//init middware
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
//router
app.use('/', require('./routes'))
//init db
require('./dbs/connectDb')
// const {overLoad} = require('./helpers/checkConnect')
// overLoad();
//handing error

module.exports = app;