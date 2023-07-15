const express= require('express');
const { getAllUser, addNewUser, updateUser, getUserById,deleteUserById } = require('../controller/user_controller');

const router= express.Router();

router.get("/",getAllUser)

router.post("/",addNewUser)

router.put("/:id",updateUser)
router.get("/:id",getUserById)
router.delete("/:id",deleteUserById)

module.exports=router;