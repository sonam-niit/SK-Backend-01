const http= require('http');
const path= require('path');

let server=http.createServer((req,res)=>{

    if(req.url=="/about"){
        res.end("About Us Page");
    }
    else if(req.url=="/contact"){
        res.end("Contact Us Page")
    }
    else{
        res.end("Hello World")
    }
})

server.listen(5000,()=>{
    console.log("server started")
})