import express from 'express'
import { login, reg, regcomplaint } from '../controller/controller.js'
import { upload } from '../multer.js'


const auth=express.Router()
auth.post("/register",reg);
auth.post("/login",login);
auth.post("/complaints",upload.single('image'),regcomplaint)


export default auth;
