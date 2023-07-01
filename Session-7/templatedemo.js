const express= require('express');

const users= require('./viewfiles/users.json');

const app= express(); //server

app.set('view engine','pug');
app.set('views','./viewfiles')
app.get("/",(req,res)=>{
    res.render('index');
})
app.get("/users",(req,res)=>{
    res.render('users',{userlist:users});
})
app.get("/users/:id",(req,res)=>{
    const id= req.params.id;
    const user= users.find((value)=>value.id==id)
    console.log(user);
    if(user!=undefined)
        res.render('userdetails',{userdata:user});
    else{
        res.render('notfound',{message:`User Not Found with Id ${id}`})
    }
})
app.get("/welcome",(req,res)=>{
    res.render('welcome',{title:"Hello User",message:"Good Evening..!!"});
})

app.listen(5000,()=>{
    console.log("Server Started")
})