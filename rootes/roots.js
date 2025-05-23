import express from 'express'
import { admincomp, editp, feedb, login, profilev, reg, regcomplaint, users, viewcomp } from '../controller/controller.js'
import { upload } from '../multer.js'
import verifytoken from '../middleware/authentication.js';


const auth=express.Router()
auth.post("/register",reg);
auth.post("/login",login);
auth.post("/complaints",upload.single('proof'),regcomplaint)
auth.get("/viewcomp/:userid",verifytoken,viewcomp)
auth.get("/admincomp",verifytoken,admincomp)
auth.get("/profilev/:userid",profilev)
auth.put("/editp/:userid",editp)
auth.get("/users",users)
auth.post("/feedback/:userid",feedb);






export default auth;
