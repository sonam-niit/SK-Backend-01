const express= require("express");
const jwt= require('jsonwebtoken');
const dotenv= require('dotenv');
dotenv.config();
const app= express();
app.use(express.json())

app.post("/login",(req,res)=>{
    const {username,password}=req.body;
    const userObj={username,password};
    const token= jwt.sign(userObj,process.env.JWT_SECRET);
    res.send(token);
})
//function to verify Token (middleware)
function verifyToken(req,res,next){
    const brtoken= req.headers.authorization;
    const token= brtoken.split(" ")[1];
    console.log(token);
    if(!token){
        return res.status(403).json({message:"Token not provided"})
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,payload)=>{
        if(err){
            return res.status(401).json({message:"Invalid Token"})
        }
        req.user=payload;
        next();
    })
}
//create Protected Route
app.get("/profile",verifyToken,(req,res)=>{
    res.json({message:"Procted Route",user:req.user})
})
app.listen(process.env.PORT,()=>{
    console.log(`Server Started on ${process.env.PORT}`)
})