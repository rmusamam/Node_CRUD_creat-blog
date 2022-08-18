exports.checkToken=(req,res,next)=>{
    if(req.path=='/login' || req.path=='/register'){
        return next()
    }
    console.log('this is request header',req.headers['token'])
    const header= req.headers['token']
    
    if(typeof header !== 'undefined'){
        // console.log('in middleware checkToken header: ',header)
        const headerSplit=header.split(' ')

        const token= header
        req.token=token
        console.log('token is :',token);
        next()
    }
    else{
        res.send('Access denied without Token')

        console.log(header);
    }
}