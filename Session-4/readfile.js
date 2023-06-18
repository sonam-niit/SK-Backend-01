const fs= require('fs');

fs.readFile('./files/data.txt',(err,data)=>{

    if(err){
        console.log(err)
    }
    console.log(data.toString());
})