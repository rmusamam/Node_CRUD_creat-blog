const mongoose = require("mongoose");

const User = mongoose.Schema({
  name: {
    type: String,
    // min: 5,
    required: true,
  },
  email: {
    type: String,
    // min: 5,
    required: true,
  },
  password: {
    type: String,
    // min: 5,
    required: true,
  },
  role:{
    type:String,
    default:'user'
  }
});

const addUser= mongoose.model('blogUsers',User)

module.exports=addUser
