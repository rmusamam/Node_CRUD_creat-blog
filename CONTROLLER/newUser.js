const addUser= require('../MODEL/newUserSchema')
const jwt= require('jsonwebtoken')
const bcrypt = require("bcryptjs");
exports.newUser=async(req,res)=>{
    const data = req.body;
    try{

        const salt = await bcrypt.genSalt(10);
      
        const hashedPassword = await bcrypt.hash(data.password, salt);
      
        const user= await addUser.create({
            email: data.email,
            name: data.name,
            password: hashedPassword,
          })
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

exports.userLogin=async (req, res) => {
    console.log("in loginAccount");
    const login = await userSchema.findOne({ email: req.body.email });
    if (!login) return res.status(400).send("Email not exist");
    console.log("email matched", login);
    const validPassword = await bcrypt.compare(req.body.password, login.password);
    if (!validPassword) return res.status(400).send("Incorrect Password");
  
    console.log("login successfully valid password:", validPassword);
  
    const token = jwt.sign({ _id: login._id }, process.env.TOKEN_SECRET);
    res.send(token);
  };
  