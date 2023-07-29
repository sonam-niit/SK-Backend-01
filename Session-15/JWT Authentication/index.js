const express= require('express');
const cookieParser= require('cookie-parser');
const DBConnect = require('./dbconfig');
const isAuthenticated = require('./middleware/protectedResourse');
require('dotenv').config();

const app = express();
//Express JSON for Body Parser
app.use(express.json());
app.use(cookieParser())
DBConnect();


app.use("/api/auth",require('./routes/auth_routes'))
app.get("/profile",isAuthenticated,(req,res)=>{
    res.send({message:"Profile Page",user:req.user})
})
//start server on portNo 5000
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});