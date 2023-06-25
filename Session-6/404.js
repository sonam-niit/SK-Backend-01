const express= require("express");

const PORT=5000;
const app= express();

app.get("/",(req,res)=>{
    res.send("Page is running")
})
app.get("/news",(req,res)=>{
    res.send("News page")
})
app.get("/offers",(req,res)=>{
    res.send("Offers Page")
})
//Always keep at last of your all routings
app.use((req,res)=>{
   // res.send("The Page You are requesting is not found")
   res.sendFile(__dirname+"/files/notfound.html")
})

app.listen(PORT, ()=>{
    console.log(`Server is Listening of port ${PORT}`)
})