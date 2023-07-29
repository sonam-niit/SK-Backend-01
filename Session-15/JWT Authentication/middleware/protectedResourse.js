const UserModel = require('../models/user_model')
const jwt= require('jsonwebtoken');
const dotenv= require('dotenv');
dotenv.config();

//Middleware

const isAuthenticated= async(req,res,next)=>{
    const token= req.cookies.jwt;

    if(!token){
       return res.status(403).json({message:"You are not logged In..!!"})
    }
    try {
        jwt.verify(token,process.env.JWT_SECRET,(err,payload)=>{
            if(err){
                return res.status(401).json({message:"Invalid token..!!"})
            }
            req.user=payload;
            next();
        })
    } catch (error) {
        console.log(error);
    }
}
module.exports=isAuthenticated