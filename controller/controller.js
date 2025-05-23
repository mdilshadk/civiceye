import register from "../schemas/register.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import complaints from "../schemas/complaint.js"; 
import feedback from "../schemas/feedback.js";


const reg=async(req,res)=>{
    try{

        const {name ,phonenumber ,dob,email,password} = req.body;

        console.log(name ,email,password);
        

        const exemail=await register.findOne({email:email})
        if(exemail){
            return res.status(404).json("mail already exist");
        }

        const hashpassword=await bcrypt.hash(req.body.password,10);
        
        const regdata={...req.body,password:hashpassword}

        const newreg=await new register(regdata)
        const savereg=await newreg.save()
        return res.json(savereg)
    }
    catch(e){
        return res.status(500).json({message:'error occured during register'})

    }
}
const login=async(req,res)=>{
    try{
        const{email,password}=req.body;
        
        const user=await register.findOne({email:email})
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        
        const pass=await bcrypt.compare(password,user.password)
        if(!pass){
            return res.status(404).json({message:"Invalid password"})

        }

        const token=jwt.sign(
            {
                userid:user._id,
                email:user.email
            },
            "abc",
            {expiresIn:"1h"}
        );
        return res.status(201).json({message:"Login successful",token:token,_id:user._id,usertype:user.usertype})
    }
    catch(error){
        res.status(500).json({message:"somthing error"})
    }
}

const regcomplaint=async(req,res)=>{
    try{
        const{ description,complainttype,location,userId}=req.body;
        const file=req.file;

        if(!file){
            return res.status(400).json("file not uploaded")
        }

        const newcomp= new complaints({
            description,
            complainttype,
            location,
            proof:file.filename,
            userId,
        });
        const savedcomp=await newcomp.save();
        res.status(201).json({message:"complaint saved",savedcomp})
    }
     catch(error){
        res.status(500).json({message:"somthing error"})
    }
    
}

const viewcomp=async(req,res)=>{
    try{
        const userId=req.params.id
    const response=await complaints.find({userid:userId})
    res.json(response)
    }
     catch(error){
        res.status(500).json({message:"somthing error"})
    }

}

const admincomp=async(req,res)=>{
    try{
        const complaintdetail=await complaints.find()
        const responsedata=[]

        for(let x of complaintdetail){
            let response=await register.findById(x.userId);
            responsedata.push({
                complaint: x,
                user:response

            })
        }
        res.json(responsedata)
        
    }
    catch(error){
        res.status(500).json({message:"somthing error"})
    }
}

const profilev=async(req,res)=>{
    try{
        const userId = req.params.userid;
        const response = await register.findById(userId);
        res.json(response);
    }
    catch(error){
        res.status(500).json({message:"somthing error"})
    }
    
}

const editp=async(req,res)=>{
    try{
        const userid = req.params.userId;
        const response=await register.findByIdAndUpdate(userid,req.body);
        res.json(response)

    }
    catch(error){
        res.status(500).json({message:"somthing error"})
    }
}

const users =async(req,res)=>{
    try{
        const users=await register.find();
        res.json(users);
    }
    catch(error){
        res.status(500).json({message:"somthing error"})
    }
}

const feedb=async(req,res)=>{
    const{feed,userid}=req.body;

    const newfeed=new feedback({
        feed,userid
    });
    const sfeed=await newfeed.save();
    res.json(sfeed)
}


export{reg,login,regcomplaint,viewcomp,admincomp,profilev,editp,users,feedb}