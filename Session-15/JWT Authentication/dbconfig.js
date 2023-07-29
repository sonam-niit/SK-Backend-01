const mongoose= require('mongoose');
const dotenv= require('dotenv');
dotenv.config();

async function DBConnect(){
    try {
        await  mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connected");
    } catch (error) {
        console.log(error);
    }
  
}

module.exports= DBConnect;