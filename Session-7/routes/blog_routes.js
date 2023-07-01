const express= require('express');

const BlogRouter= express.Router();

BlogRouter.get("/",(req,res)=>{
    res.send("Getting all Blog routes")
})
BlogRouter.get("/:id",(req,res)=>{
    res.send(`Getting only one route with id ${req.params.id}`)
})

//to use them in seperate files
module.exports=BlogRouter;