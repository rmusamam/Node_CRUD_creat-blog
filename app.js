const express = require("express");
const app = express();
const bodyParser = require("body-parser");


//imports
const create= require('./ROUTE/create')
const blog= require('./ROUTE/blogRoute')
const checkToken=require('./MIDDLEWARE/checkToken')
const verifyToken=require('./MIDDLEWARE/verifyToken')



app.use(bodyParser.json());

//Route MiddleWares
app.use('/',create)
app.use('/blog',blog)

module.exports=app