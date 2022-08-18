const mongoose = require("mongoose");

const UserBlog = mongoose.Schema({
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
    required: true
    // default: ['user','admin']
  }
});

// module.exports = mongoose.model('Blogers',UserBlog)
module.exports = mongoose.models.UserBlog || mongoose.model('UserBlog', UserBlog);


