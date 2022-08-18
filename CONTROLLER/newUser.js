const addUser= require('../MODEL/newUserSchema')
const jwt= require('jsonwebtoken')
const bcrypt = require("bcryptjs");
exports.newUser=async(req,res)=>{
    const data = req.body;
    try{

        const salt = await bcrypt.genSalt(10);
      
        const hashedPassword = await bcrypt.hash(data.password, salt);
      
        const user= await addUser.create({
            name: data.name,
            email: data.email,
            password: hashedPassword,
            role: data.role
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


exports.login=async(req,res)=>{
    const login= await addUser.findOne({email:req.body.email})
    console.log('role isskdjfasdkfjasjfklasjfskaf: ',login.role)

    if(!login){
        console.log("user not exist");
        res.status(404).send("Not found")
    }
    else if(login.role === 'admin'){
        const validPassword = bcrypt.compare(req.body.password, login.password);
        console.log("bcrypt outPut:",validPassword)
        if(validPassword){
            console.log("password is correct")
            jwt.sign({login},process.env.TOKEN_SECRET,{expiresIn:'2h'},(err,token)=>{
                res.status(200).json({
                    token
                })
            })
        }
        else{
            res.status(400).send('Role is admin Access Denied')
        }
        
    }
    else{
        res.status(400).send('Your are not Admin. Access Denied')
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
  