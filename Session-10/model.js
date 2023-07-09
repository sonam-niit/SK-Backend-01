const mongoose= require('mongoose');
const schema= mongoose.Schema({
    name:String,
    email:String,
    percentage:Number,
    country:String
});
const Student= mongoose.model('Student',schema);

module.exports=Student;