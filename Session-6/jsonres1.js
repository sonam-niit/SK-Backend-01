const express= require("express");

const PORT=5000;
const app= express();
const user1={id:1,name:"alex",email:"alex@gmail.com"}
const user2={id:2,name:"bob",email:"bob@gmail.com"}
const user3={id:3,name:"catty",email:"catty@gmail.com"}
const array=[user1,user2,user3];

app.get("/users",(req,res)=>{
    res.status(200).json(array);
})
app.get("/users/:userId",(req,res)=>{
    
    const id= req.params.userId
    //console.log(id)
    //const user= array.find((value)=>value.id==id);
    let user=undefined;
    for(let i=0;i<array.length;i++){
        if(array[i].id==id){
            user=array[i];
        }
    }
    if(user!=undefined){
        res.status(200).json(user);
    }
    else{
        res.status(404).json({message:"User not available"})
    }
    
})

app.listen(PORT, ()=>{
    console.log(`Server is Listening of port ${PORT}`)
})