const mongoose = require("mongoose");

const newUser = mongoose.Schema({
  name: {
    type: String,
    min: 5,
    required: true,
  },
  email: {
    type: String,
    min: 5,
    required: true,
  },
  password: {
    type: String,
    min: 5,
    required: true,
  },
});

const addUser= mogoose.model('Users',newUser)

module.exports=addUser
