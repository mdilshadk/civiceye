import express from 'express'
import { admincomp,  compcounts, editp, feedb, feedview, login, overviewd, profilev, reg, regcomplaint,resolve, users, viewcomp } from '../controller/controller.js'
import { upload } from '../multer.js'
import verifytoken from '../middleware/authentication.js';


const auth=express.Router()
auth.post("/register",reg);
auth.post("/login",login);
auth.post("/complaints",upload.single('proof'),regcomplaint)
auth.get("/viewcomp/:userId",verifytoken,viewcomp)
auth.get("/admincomp",verifytoken,admincomp)
auth.get("/profilev/:userid",profilev)
auth.put("/editp/:userid",editp)
auth.get("/users",users)
auth.put("/resolve/:userId",verifytoken, resolve)
auth.post("/feedback/:userid", feedb);
auth.get("/feedview",verifytoken,feedview)
auth.get("/counts", compcounts);
auth.get("/overview", overviewd);










export default auth;
