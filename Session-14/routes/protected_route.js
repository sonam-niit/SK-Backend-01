const userModel = require('../models/user')
//Middleware check if the user is logged in or not
const isAuthenticated=async (req,res,next)=>{
    const {userId}=req.cookies;
    if(!userId){
        return res.status(401).json({message:"You are not logged in"})
    }
    try {
        const user=await userModel.findById(userId);
        if(!user){
            return res.status(401).send("Authentication Failed")
        }
        req.user=user;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
    
}

module.exports={
    isAuthenticated
}