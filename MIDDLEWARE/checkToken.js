module.exports.checkToken=(req,res,next)=>{
    if(req.path=='/login' || req.path=='/register'){
        return next()
    }
    const header= req.header[header]
    if(typeof header !== 'undefined'){
        console.log('in middleware checkToken header: ',header)
        const headerSplit=header.split(' ')

        const token= headerSplit[1]
        req.token=token
        console.log('token is :',token);
        next()

    }
    else{
        res.send('Access denied without Token')
    }
}