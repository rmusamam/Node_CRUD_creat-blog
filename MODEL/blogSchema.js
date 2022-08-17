const mongoose=require('mongoose')

const blog=mongoose.Schema({
    post:{
        type:String,
        required:true
    }
})

const blogPost=mongoose.model('blogPost',blog)
module.exports=blogPost