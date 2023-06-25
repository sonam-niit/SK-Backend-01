const express= require("express");

const PORT=5000;
//created Express server
const app= express();
//middle ware
app.use("/",(req,res)=>{
    res.send("Hello World")
})

//Started Express server
app.listen(PORT, ()=>{
    console.log(`Server is Listening of port ${PORT}`)
})