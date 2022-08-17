const blogPost = require("../MODEL/blogSchema");

exports.createBlog = async (req, res) => {
  try {
    console.log('in createBlog')
    const newPost = await blogPost.create(req.body);
    console.log("newPost is : ", newPost);
    res.status(200).json({
      message: "successfully Post Saved",
    });
  } catch (err) {
    res.status(400).json({
      message: "Failed to add post in DB",
    });
  }
};

exports.showBlog = async (req, res) => {
  try {
    const allPost = await blogPost.find();
    res.status(200).json({
      message: "showing data",
      Results: allPost.length,
      allPost,
    });
  } catch (err) {
    res.status(400).json({
      message: "Failed to show post in DB",
    });
  }
};



exports.deleteBlog=async (req,res)=>{
    try{
        const deletePost=await blogPost.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "delete the data successfully",
            deletePost,
          });
    }catch(err){
        res.status(400).json({
            message: "Failed to delete post from DB",
          });
    }
}

exports.updatePost=async(req,res)=>{
    try{
        const updatedPost=await blogPost.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json({
            status:'Updated',
            updatedPost

        })
    }catch(err){
        res.status(400).json({
            message: "Failed to update post from DB",
          });
    }
}