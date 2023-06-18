const fs= require('fs');

const message="Welcome to the World of File System"

fs.appendFile('./files/data.txt',message,(err)=>{
    if(err)
        throw err;
    console.log("Data Written Successfully to the file")
})