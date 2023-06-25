const express= require("express");

const PORT=5000;
const app= express();
const user1={id:1,name:"alex",email:"alex@gmail.com"}
const user2={id:2,name:"bob",email:"bob@gmail.com"}
const user3={id:3,name:"catty",email:"catty@gmail.com"}
const array=[user1,user2,user3];

app.get("/users",(req,res)=>{
    res.json(array);
})
app.get("/users/1",(req,res)=>{
    res.json(user1);
})
app.get("/users/2",(req,res)=>{
    res.json(user2);
})
app.get("/users/3",(req,res)=>{
    res.json(user3);
})

app.listen(PORT, ()=>{
    console.log(`Server is Listening of port ${PORT}`)
})