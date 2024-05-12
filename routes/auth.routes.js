const express=require("express")

const router=express.Router()
const {login,signup,logout}=require('../controllers/auth.controller')

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)


module.exports=router;