const mongoose= require('mongoose');

let UserSchema= new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        max:100
    },
    lname:{
        type:String,
        required:true,
        max:100
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    age:{
        type:Number
    }
})

//export the Model
module.exports= mongoose.model("User",UserSchema);