const fs= require('fs');
//const message="Welcome to the World of File System"

fs.writeFile('./files/data.txt',"This is my newly added message",(err)=>{
    if(err)
        throw err;
    console.log("Data Written Successfully to the file")
})