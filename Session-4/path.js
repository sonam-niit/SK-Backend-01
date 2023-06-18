const path= require('path');

let myPath= "E:/SkillAcademy/Backend-Batch1/Session-4/path.js";

const dir= path.dirname(myPath);
console.log(dir);
//properties
console.log(`Deleimiter: ${path.delimiter}`);
console.log(`Seperator: ${path.sep}`)

const ext= path.extname(myPath);
console.log(ext);
console.log(`Is Absolute: ${path.isAbsolute(myPath)}`)
console.log(`Is Absolute: ${path.isAbsolute("/html/images/test.jpg")}`)
console.log(`Is Absolute: ${path.isAbsolute("test.js")}`)

const fileName= path.basename(myPath);
console.log(`File Name: ${fileName}`)
const fileNameWithoutExt= path.basename(myPath,ext);
console.log(`FileName Without Extention: ${fileNameWithoutExt}`)

//Format path
let pathToFile= path.format({
    dir:'home/sonam/batch1',
    base:'demo.js'
})

console.log(`Formatted Path: ${pathToFile}`)

//join method is used to join path
let pathToJoin= path.join('home','sonam','batch1','task.js');
console.log(pathToJoin);
//parse method
let objectPath= path.parse(myPath);
console.log(objectPath);

let resolvePath= path.resolve(myPath);
console.log(resolvePath)
//if the path is absolute then it will return as it is

let resolvePath1= path.resolve('nodejs/test.js');
console.log(resolvePath1)
//if the path is not absolute then it will take the path of current dire