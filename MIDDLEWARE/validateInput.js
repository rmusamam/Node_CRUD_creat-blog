const joi = require("@hapi/joi");
const userSchema= require('../Model/newUserSchema')


const validateLogin= (req,res,next)=>{
    console.log("in login validate");
  
    const loginSchema = joi.object({
      email: joi.string().min(5).required(),
      password: joi.string().min(5).required(),
     });
  
     const login=loginSchema.validate(req.body)
     console.log('login validted:',login)
     
     if(!login.error) return next()
     res.status(400).send("login Credentials are not correct")
  }
  
  const emailExist= (req,res,next)=>{
  
    const data = req.body;
  const existAlready= userSchema.findOne({email:req.body.email})
  console.log(existAlready);
  //  console.log("this EMAIL checking data middleware function",existAlready);
    if(existAlready)
    {
        res.status(400).send("Email already exist")
    }
    else{
        next()
    }
}


const validateRegisteration = (req, res, next) => {
    console.log('in validateInput validateRegisteration')
   const data = req.body;
   const schema = joi.object({
    email: joi.string().min(5).required(),
    name: joi.string().min(5).required(),
    password: joi.string().min(5).required(),
    role: joi.string(),
   });
   const Responses = schema.validate(data);
   if(!Responses.error) return next()
   res.send(Responses.error.details[0].message)
  };



  module.exports = {validateRegisteration,validateLogin,emailExist};
