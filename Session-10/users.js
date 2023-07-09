const Student= require('./model');
const addUser = () => {
    const newStudent = new Student({
        name: "John",
        email: "john@gmail.com",
        percentage: 67.89,
        country: "Indonesia"
    })
    newStudent.save()
        .then((resp) => console.log("Student Created", resp))
        .catch((err) => console.log("Error", err))
}

const getAllUSers = () => {

    Student.find()
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err))
}

const getUserById=(id)=>{
    Student.findById(id)
    .then((user)=>{
        if(user!=null){
            console.log(user)
        }else{
            console.log("No User Found for this Id")
        }
    })
    .catch((err)=>console.log(err))
}
const updateUserById=(id,obj)=>{
    Student.findByIdAndUpdate(id,obj)
    .then((resp)=>{
        if(resp!=null){
            console.log("User Updated Successfullly",resp)
        }else{
            console.log("No user FOund for Update")
        }
    })
    .catch((err)=>console.log(err))
}
const deleteUser=(id)=>{
    Student.findByIdAndDelete(id)
    .then((resp)=>{
        if(resp!==null){
            console.log("User Deleted Successfully")
        }else{
            console.log("No User to Delete")
        }
    })
}
const getUserByEmail=(emailId)=>{
    Student.findOne({email:emailId})
        .then((resp) =>{
            if(resp!=null){
                console.log(resp)
            }else{
                console.log("No user Registerd with this email Id")
            }
            
        })
        .catch((err) => console.log(err))
}

const getTopperUsers = () => {
    Student.find({percentage:{$gt:85}})
        .then((resp) => {
            if(resp.length>0){
                console.log(resp)
            }else{
                console.log("No students has highest marks than 85")
            }
        })
        .catch((err) => console.log(err))
}
const getSortedUsers = () => {
    Student.find().sort({percentage:1})
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err))
}

module.exports={addUser,getAllUSers,getUserById,updateUserById,deleteUser,
getUserByEmail,getTopperUsers,getSortedUsers}