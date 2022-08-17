const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const create= require('./ROUTE/create')
const blog= require('./ROUTE/blogRoute')
const checkToken=require('./MIDDLEWARE/checkToken')
const verifyToken=require('./MIDDLEWARE/verifyToken')



mongoose.connect(process.env.DB.replace("<PASSWORD>", process.env.PASSWORD), {
  useNewUrlParser:true
})
.then(()=>console.log('DB connected'))
.catch(e=>console.log("error:",e))

// const url='mongodb+srv://rmusamam:ranausama@cluster0.fsilfnm.mongodb.net/JWT?retryWrites=true&w=majority'
// mongoose.connect(url,{useNewUrlParser:true},()=>console.log('connected'))
// const db= mongoose.connection;

// db.once('open',()=>console.log('db is now connected checked successfully'))
// db.on('error',e=>console.log('failed to connected'))

// const url = "mongodb://localhost:27017/blogDB";
// mongoose
//   .connect(url, { useNewUrlParser: true })
  
//   const db= mongoose.connection;

// db.once('open',()=>console.log('db is now connected checked successfully'))
// db.on('error',e=>console.log('failed to connected'))


app.use('/',create)
app.use('/blog',blog)
app.use(checkToken,verifyToken)

app.listen(port, () => {
  console.log(`SERVER RUNNING AT PORT:${port}`);
});
