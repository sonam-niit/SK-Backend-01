const UserModel = require('../models/user')
const bcrypt= require("bcrypt")

const register = async (req, res) => {
    const { name, email, username, password } = req.body;
    if (!name || !email || !username || !password) {
        return res.status(400)
            .json({ message: "Name, Email, UserName and Password are mandatory Fields" })
    }
    const user = await UserModel.findOne({ email });
    if (user) {
        return res.status(400)
            .json({ message: "Email is already registered" })
    }
    const user1 = await UserModel.findOne({ username });
    if (user1) {
        return res.status(400)
            .json({ message: "Username is already registered" })
    }

    //Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
        name,
        email,
        username,
        password: hashedPassword
    });
    await newUser.save();
    res.status(201)
      .json({message:"User Registered Successfully"})
}
const login = async (req, res) => {
    const { username, password } = req.body;
    if (!username ||!password) {
        return res.status(400)
           .json({ message: "Username and Password are mandatory Fields" })
    }
    const user = await UserModel.findOne({ username });
    if (!user) {
        return res.status(400)
            .json({ message: "Username is not registered" })
    }
    const match=await bcrypt.compare(password,user.password);
    const payload={
        id:user._id,
        name:user.name,
        username:user.username
    }
    if(match){
        res.status(200)
          .json({message:"Login Successfull",userDetails:payload})
    }else{
        return res.status(400)
          .json({ message: "invalid Credentials" })
    }
}

module.exports = {
    register,
    login
}