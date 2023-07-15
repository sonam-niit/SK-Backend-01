const UserModel= require("../model/user");

const getAllUser=async (req,res)=>{
    try {
        const users =await UserModel.find();
        console.log(users);
        res.status(200).json(users)
    } catch (error) {
        res.send(error)
    }
}

const addNewUser= async(req,res)=>{
    const {fname,lname,email,password,age}=req.body;
    var user= new UserModel();
    user.fname=fname;
    user.lname=lname;
    user.email= email;
    user.password=password;
    user.age= age;

    try {
        const resp = await user.save();
        res.status(201).json(resp);
    } catch (error) {
        res.send(error)
    }
}
const updateUser=async (req,res)=>{
    const id= req.params.id;
    if(!req.body){
        return res.status(400).json({message:"Data for update can no be Empty"})
    }
    try {
        const data=await UserModel.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        if(!data){
            res.status(404).json({message:"We can not update the data as user not found" })
        }
        res.status(200).send({message:"User Updated successfuly",user:data})
    } catch (error) {
        res.status(500).send({message:"Error While Updating the Data"})
    }
}

const getUserById= async (req,res)=>{
    const id= req.params.id;
    try {
        const data=await UserModel.findById(id);
        if(!data){
            res.status(404).json({message:"user not found with Id provided" })
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send({message:"Error While Updating the Data"})
    }
    
}
const deleteUserById= async(req,res)=>{
    const id= req.params.id;
    try {
        const data=await UserModel.findByIdAndDelete(id);
        if(!data){
            res.status(404).json({message:"user not found with Id provided" })
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send({message:"Error While Updating the Data"})
    }
}


module.exports= {getAllUser,addNewUser,updateUser,getUserById,deleteUserById}