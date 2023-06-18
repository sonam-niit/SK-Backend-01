const os=require('os');

console.log(`Home Directory: ${os.homedir}`)
console.log(`Host name: ${os.hostname}`)
console.log(`Total Memory: ${os.totalmem}`)
console.log(`Free Memory: ${os.freemem}`)
// cpus=os.cpus();
// for(let x of cpus){
//     console.log(x)
// }
console.log(`Type: ${os.type()}`)
console.log(`Platform: ${os.platform()}`)
console.log(`Version: ${os.version()}`)
console.log(`Release: ${os.release()}`)