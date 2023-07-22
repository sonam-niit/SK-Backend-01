const mongoose= require('mongoose');

async function connectDB(){
    try {
        const conn=await mongoose.connect("mongodb://127.0.0.1:27017/bcrypt");
        console.log("DB Connected");
    } catch (error) {
        console.log("Error While Connecting with DB",error);
    }  
}

module.exports=connectDB;