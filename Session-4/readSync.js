const fs= require('fs');

// const data= fs.readFileSync(`./files/data.txt`)
// console.log(data.toString())

// fs.writeFileSync('./files/data.txt',"Hello All... Welcome...");
// console.log("Data written successfully")

// fs.appendFileSync('./files/data.txt',"Hello All... Welcome...");
// console.log("Data Appended successfully")

fs.open('./files/data.txt','r',(err,fd)=>{
    if(err)
        throw err
    console.log("Files opened in Read mode")
    console.log("File Descriptor ",fd)
})