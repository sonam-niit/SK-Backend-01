const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const fileModel= Schema({
    profileImg:{
        type:String
    }
});

module.exports= mongoose.model("FileModel",fileModel);