const express= require('express');

const app= express(); //server

app.use(express.json())//jsonparser
app.use("/restaurant",express.static("restaurant"))
app.post("/",(req,res)=>{
    console.log(req.body)
    res.status(201).send(req.body);
})

app.get("/",(req,res)=>{
    res.send("Welcome User");
})

//use blog routes for /api/blog path
//Middle ware
app.use("/api/blog",require('./routes/blog_routes'))

app.listen(5000,()=>{
    console.log("Server Started")
})