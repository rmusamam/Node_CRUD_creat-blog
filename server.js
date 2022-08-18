const app=require('app.js')
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT;

mongoose.connect(process.env.DB.replace("<PASSWORD>", process.env.PASSWORD), {
  useNewUrlParser:true
})
.then(()=>console.log('DB connected'))
.catch(e=>console.log("cant connect to db , error:",e))


app.listen(port, () => {
  console.log(`SERVER RUNNING AT PORT:${port}`);
});
