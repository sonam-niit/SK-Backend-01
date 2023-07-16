const express= require('express');
const cors= require('cors');
const multer= require('multer');
const path= require('path');
const mongoose= require('mongoose');

const app= express();
app.use(express.json())//JSON Parser
app.use(cors());
app.use("/images",express.static('./images'))

//DB Connectivity
mongoose.connect('mongodb://127.0.0.1:27017/fileapp')
.then(()=>console.log("Connected"))
.catch((err)=>{console.log("Error Occured",err)})

//Include Model
const fileModel= require('./model');
//storage
const storage=multer.diskStorage({
    destination:'./images',
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}--${file.originalname}`)
    }
})

//Check FileType
const checkFileType=(file,cb)=>{
    const fileTypes=/jpeg|jpg|png/; //Regular Expression
    const extName=fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType= fileTypes.test(file.mimetype);
    if(extName && mimeType){
      return  cb(null,true);
    }else{
        cb("Error..... You can only Upload JPEG, JPG or PNG Images")
    }
}
//initialize multer
const upload=multer({
    storage:storage,
    limits:{fileSize:100000}, //1 MB
    fileFilter:(req,file,cb)=>{
        checkFileType(file,cb);
    }
})
//API for Upload an Image
app.post("/imageupload",upload.single("image"),async (req,res)=>{

    if(req.file){
        let newFile= new fileModel();
        newFile.profileImg=req.file.filename;
        try {
            const resp= await newFile.save();
            res.status(200).send({message:"File Uploaded",file:resp});
        } catch (error) {
            res.status(500).send({message:"Error Occured",error:error})
        }
    }else{
        res.status(400).send("Please Upload a Valid Image")
    }
})
app.get("/getall",async(req,res)=>{

    try {
        const data= await fileModel.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send("Some Error Occured")
    }
})
app.listen(5000,()=>{
    console.log("Server is listining on PORT 5000")
})