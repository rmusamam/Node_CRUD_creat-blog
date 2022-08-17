const addUser= require('../MODEL/newUserSchema')
const jwt= require('jsonwebtoken')
exports.newUser=async(req,res)=>{
    // console.log(req.body)
    const data = req.body;
    try{
        // console.log('in newUser function');
        const user= await addUser.create(req.body)
        res.status(200).json({
            message:'user added',
            status:'success',
        })
        console.log('user added successfully')
    }catch(err){
        res.status(400).json({
            status:'fail',
            message:err
        })
        // console.log('user add failure')
        console.log(err);
    }

}


exports.login=(req,res)=>{
    const login= addUser.findOne({email:req.body.email})
    if(!login){
        console.log("user not exist");
        res.status(404).send("Not found")
    }
    else if(req.body.role=='admin' && req.body.password==password){
        jwt.sign({login},'secretkey',{expiresIn:'2h'},(err,token)=>{
            res.status(200).json({
                token
            })
        })
    }
}