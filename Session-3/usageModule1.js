const testm=require('./utility/module1')
const {message} = require('./utility/module1');

console.log(message);
console.log(testm.jsonObject);
console.log(testm.message);
console.log(testm.printFullName("John","Abraham"));