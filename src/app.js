const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const employeeRoute = require('./../src/route/employeeRoute')
const { connectToMongo } = require('./config/connect/connect.js')

connectToMongo();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

app.use('/', employeeRoute);


module.exports = app