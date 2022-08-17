const jwt=require('jsonwebtoken')

module.exports= function verifyToken (req,res,next){
    console.log('in verifying Token req.path:',req.path);
    if(req.path=='/login' || req.path=='/register'){
        console.log("login and register doesnot require token");
        return next()
    }
    else{
        console.log('in verifyToken req.token: ',req.token)
        jwt.verify(req.token ,process.env.TOKEN_SECRET,(err,authdata)=>{
            console.log('error of token : ',err)
            if(err){
                res.json(err)
            }
            else{
                res.json({
                    message:'ok',
                    authdata
                })
            }
        })
    }
}

// -----------------------------

// const jwt = require('jsonwebtoken')

// module.exports = function verify(req, res, next) {
//     if (req.path === '/api/create' || req.path === '/login') {
//         next()
//     } else {
//         // console.log('in verify req.token: ', req.token)
//         jwt.verify(req.token, 'secretkey', (err, authdata) => {
//             // console.log('auth data: ', authdata)
//             // req.user = authdata;
//             if (err) {
//                 console.log(err);
//                 res.json("Error")
//             } else {
//                 res.json({
//                     message: 'post created',
//                     authdata
//                 })
//             }
//         })
//     }
// }