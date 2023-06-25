const express= require("express");

const PORT=5000;
const app= express();
//middleware
app.use("/website",express.static('website'))

// app.get("/",(req,res)=>{
//     res.send("heelo World")
// })

app.listen(PORT, ()=>{
    console.log(`Server is Listening of port ${PORT}`)
})