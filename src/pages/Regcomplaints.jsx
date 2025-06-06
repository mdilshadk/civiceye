import axios from 'axios'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Regcomplaints = () => {
  const[data,setdata]=useState({
    description:'',
    complainttype:'',
    location:'',
    proof: null
  })

  const navigate=useNavigate();
  const id=localStorage.getItem("id");

  const regcomp=async(event)=>{
    event.preventDefault()
    try{
    const formdata=new FormData()
    formdata.append('userId',id);
    formdata.append('description',data.description);
    formdata.append('complainttype',data.complainttype);
    formdata.append('location',data.location)
    formdata.append('proof',data.proof)

    let response=await axios.post("https://civiceye-1-d7k7.onrender.com/auth/complaints",formdata,{
      headers:{
        "Content-Type":"multipart/form-data"

      }
    })
    setdata(response.data)
    console.log(data);
    navigate('/')
    toast.success('Complaint Registered successfully')
  }
  catch(error){
      toast.error('Complaint Register failed')
    }
    
  }
  const handlechange=(event)=>{
      setdata({...data,[event.target.name]:event.target.value})
  }
  const handlefile=(event) => {
      setdata({ ...data, proof: event.target.files[0] });
  };
  return (
    <div >
     <div><Toaster/></div>

      <form action="" onSubmit={regcomp}>
        <div className='w-[550px] ms-[450px] text-center'>
            <h1 className='text-2xl font-bold mt-10 mb-5'>Report Issues Seamlessly</h1>
            <p>Our platform empowers users to submit complaints with ease, offering tools to upload multimedia for comprehencive issue reporting</p><br />
            <div className='text-start'>
            <label htmlFor="">Description</label><br />
              <input type="text" 
                className='w-full p-2 border border-gray-500 rounded-lg shadow-md' 
                onChange={handlechange}
                name='description' /><br /><br />
            <label htmlFor="">Complaint type</label><br />
             <select name="complainttype" id="" 
              onChange={handlechange}
               className='w-full p-2 border border-gray-500 rounded-lg shadow-md'
               >
                <option value="">waste dumping</option>
                <option value="">traffic violation</option>
                <option value="">public nuicence</option>
                <option value="">others</option>
             </select>
             <br /><br />
            <label htmlFor="">Location</label><br />
              <input type="text" 
                className='w-full p-2 border border-gray-500 rounded-lg shadow-md' 
                onChange={handlechange}
                name='location'/><br /><br />
            <label htmlFor="">Proof</label>
              <input type="file" 
                className='w-full p-2 border border-gray-500 bg-blue-300 rounded-lg shadow-md' 
                placeholder='Upload photo or video' 
                onChange={handlefile}
                name='proof'/>
            
            </div>
            <div className='flex justify-center gap-10 mt-5'>
              <button className='bg-blue-500 p-2 w-48 rounded-xl' type='submit'>Submit</button>
              <Link to={'/'}><button className='bg-blue-500 p-2 w-48 rounded-xl'>Cancel</button></Link>
            </div>
            
        </div>
        </form>
    </div>
  )
}

export default Regcomplaints