const express= require('express');
const connectDB = require('./config');
const cookieParser= require('cookie-parser')
const userModel= require('./models/user')

const app = express();
//Express JSON for Body Parser
app.use(express.json());
app.use(cookieParser())
connectDB();

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
        
    }
    
}

app.use("/profile",isAuthenticated,(req,res)=>{
    res.send({message:"Profile Page",user:req.user})
})
app.use("/api/auth",require('./routes/auth_route'))
//start server on portNo 5000
app.listen(5000,()=>{
    console.log('Server is running on port 5000');
});
