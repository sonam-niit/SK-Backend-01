//Included Dependency Of mongoose
const mongoose= require('mongoose');
const Student= require('./model');
const { getAllUSers, getUserById, updateUserById, deleteUser, getUserByEmail, getTopperUsers, getSortedUsers } = require('./users');
const dbURL="mongodb://127.0.0.1:27017/school"

mongoose.connect(dbURL)
.then(()=>console.log("Connected"))
.catch((err)=>{console.log(err)})

//getAllUSers();
//getUserById("64a99121d984de2abd599f9b");
//updateUserById("64a99121d984de2abd599f9c",{percentage:89});
//deleteUser("64aae2a14efed5e3d73a40b3");
//getUserByEmail("sonam@gmail.com");
//getTopperUsers();
getSortedUsers()