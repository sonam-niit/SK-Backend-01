const express= require('express');
const connection= require("./model/config")

const app= express();
app.use(express.json())//Json Parser for Reading JSON data coming from Frontend

app.get("/",(req,res)=>{
    res.status(200).send("Server is running correctly")
})
app.use("/api/user",require("./routes/user_routes"));
app.listen(5000,(err)=>{
    if(err){
        console.log("Error Occured",err)
    }else{
        console.log("Server Started on Port No 5000")
    }
})