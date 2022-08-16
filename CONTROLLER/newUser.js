const addUser= require('../MODEL/newUserSchema')
exports.newUser=async(req,res)=>{
    try{
        console.log('in newUser function');
        const user= await new addUser.create(req.body)
        res.status(200).json({
            message:'user added',
            status:'success',
            user
        })
        console.log('user added successfully')
    }catch(err){
        res.status(400).json({
            status:'fail',
            message:err
        })
        console.log('user add failure')
    }

}