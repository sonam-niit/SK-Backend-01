const express= require('express')
const path= require('path')
const PORT=5000;
const app= express();

app.get("/",(req,res)=>{
    //absolute path relative path will not work
    res.sendFile(path.join(__dirname,"files","index.html"));
})

app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"files","about.html"));
})
app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"files","contact.html"));
})

app.listen(PORT,()=>{
    console.log(`Server is Listening on PORT ${PORT}`)
})