const mongoose= require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/usermanagement")
.then((resp)=>console.log("Connected"))
.catch((err)=>console.log("Error: ",err))