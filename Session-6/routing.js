const express= require('express')
const PORT=5000;
const app= express();

app.get("/",(req,res)=>{
    res.send("Home Page");
})
app.get("/about",(req,res)=>{
    res.send("About Us Page")
})
//Same path will not give any error it will match the first 
//path and send the result accordingly
app.get("/about",(req,res)=>{
    res.send("About Us Page Again")
})
app.get("/contact",(req,res)=>{
    res.send("Contact Us Page")
})

app.listen(PORT,()=>{
    console.log(`Server is Listening on PORT ${PORT}`)
})