const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT;

// mongoose.connect(process.env.DB.replace("<PASSWORD>", process.env.PASSWORD), {
//   useNewUrlParser:true
// })
// .then(()=>console.log('DB connected'))
// .catch(e=>console.log("error:",e))

const url='mongodb+srv://rmusamam:ranausama@cluster0.fsilfnm.mongodb.net/JWT?retryWrites=true&w=majority'

mongoose.connect(url,{useNewUrlParser:true},()=>console.log('connected'))


app.listen(port, () => {
  console.log(`SERVER RUNNING AT PORT:${port}`);
});