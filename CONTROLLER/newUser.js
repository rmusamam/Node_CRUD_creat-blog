const addUser= require('../MODEL/newUserSchema')
exports.newUser=async(req,res)=>{
    try{
        const user= await new addUser.create(req.body)
        res.status(200).json({
            message:'user added',
            status:'success',
            user
        })
    }catch(err){
        res.status(400).json({
            status:'fail',
            message:err
        })
    }

}