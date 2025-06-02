import register from "../schemas/register.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import complaints from "../schemas/complaint.js"; 
import feedback from "../schemas/feedback.js";
import moment from "moment";



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
        const userid=req.params.userId
    const response=await complaints.find({userId:userid})
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
const resolve=async(req,res)=>{
    try{
        const complaintId = req.params.userId;
        const { status} = req.body;

        const complaint=await complaints.findByIdAndUpdate(complaintId,
            { status: status },
            { new: true })
        res.json(complaint)
    }
    catch(error){
        res.status(500).json({message:"somthing error"})
    }
}



const feedb=async(req,res)=>{
    const { feed ,userid} = req.body;

    const newfeed=new feedback({
        feed,userid
    });
    const sfeed=await newfeed.save();
    res.json(sfeed)
}


const compcounts = async (req, res) => {
  try {
    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    const thisMonth = await complaints.countDocuments({
      createdAt: { $gte: firstDay, $lte: lastDay }
    });

    const verified = await complaints.countDocuments({ status: "resolved" });
    const pending = await complaints.countDocuments({ status: "pending" });
    const rejected = await complaints.countDocuments({ status: "rejected" });

    res.json({
      thisMonth,
      verified,
      pending,
      rejected
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const feedview=async(req,res)=>{
    const feedbacks=await feedback.find()
        const responsedata=[]

        for(let x of feedbacks){
            let response=await register.findById(x.userid);
            responsedata.push({
                feedbacks: x,
                user:response

            })
        }
        res.json(responsedata)
}


const overviewd = async (req, res) => {
  try {
    const startOfMonth = moment().startOf("month").toDate();
    const endOfMonth = moment().endOf("month").toDate();

    const monthlyCount = await complaints.countDocuments({
      createdAt: { $gte: startOfMonth, $lte: endOfMonth },
    });

    const verifiedCount = await complaints.countDocuments({ status: "resolved" });
    const pendingCount = await complaints.countDocuments({ status: "pending" });
    const rejectedCount = await complaints.countDocuments({ status: "rejected" });

    const locationData = await complaints.aggregate([
      {
        $group: {
          _id: "$location", 
          count: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json({
      month: monthlyCount,
      verified: verifiedCount,
      pending: pendingCount,
      rejected: rejectedCount,
      locations: locationData,
    });
  }  catch (err) {
    res.status(500).json({ error: "Failed to fetch complaint stats" });
  }
};



export{reg,login,regcomplaint,viewcomp,admincomp,profilev,editp,users,resolve,feedb,compcounts,feedview,overviewd}