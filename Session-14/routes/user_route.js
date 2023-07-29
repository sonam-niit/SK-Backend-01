const express= require('express');
const { profile } = require('../controllers/profile_controller');
const { isAuthenticated } = require('./protected_route');

const router=express.Router();

router.get("/profile",isAuthenticated,profile);

module.exports=router;