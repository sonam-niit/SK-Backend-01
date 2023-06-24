const http= require('http');

const server = http.createServer((req,res)=>{

    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("<h1>My Data</h1>")
    res.end("<h2>Hello World</h2>");
})

server.listen(5000,(()=>{
    console.log("Server Started")
}))
