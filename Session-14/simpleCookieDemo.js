const express= require('express');
const cookieparser= require('cookie-parser')
const app= express();

//Set middleware to use cookie Parser
app.use(cookieparser())

//set Cookies
app.get("/set-cookie",(req,res)=>{
    res.cookie('username',
    'sonamsoni',
    {
        maxAge:24*60*60*1000 //cookie will expire after 1 day
    });
    res.send('Cookie Set');
})
//Read Cookies
app.get('/read-cookies',(req,res)=>{
    const username= req.cookies.username;
    res.send(`Hello ${username}`);
})
//Delete Cookies
app.get("/delete-cookie",(req,res)=>{
    res.clearCookie('username');
    res.send('Cookie Deleted Successfully');
})

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})