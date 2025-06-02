import React, { useState } from 'react'
import img1 from './civiceye.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'



const Register = () => {
  const[data,setdata]=useState({})
  const navigate=useNavigate()

  const regi=async(event)=>{
    event.preventDefault()
    try{
    let response=await axios.post("https://civiceye-1-d7k7.onrender.com/auth/register",{...data,usertype:"user"});
    setdata(response.data)
    console.log(response.data);
    toast.success('Registered successfully')
    navigate("/loged")
    }
    catch(error){
      toast.error('Register failed')
    }
  }
  const handlechange = (event) => {
    setdata({...data, [event.target.name]: event.target.value });
  };

  return (
     <div className='mt-36 ml-64 border border-gray-600 rounded-lg h-[500px] w-[950px] text-center'>
            <div><Toaster/></div>

          <div className='flex gap-16 '>
            <div className='p-16'>
                <img src={img1} alt="" />
                <h5 className='mt-14'>Welcome to CivicEye</h5><br />
                <h5>Your platform to report,</h5>
                <h5>track,and resolve public</h5>
                <h5>issues with ease.</h5>
    
            </div>
            <div className="h-80 w-px mt-20 bg-black"></div>
            <div>
              <form action="" onSubmit={regi}>

                <h1 className='mt-14 '><b>SIGN UP</b></h1>
                <input type="text" 
                  placeholder='Full Name' 
                  name='name' 
                  className=' mt-7 border-2 border-gray-600 p-1 w-72 rounded-md'
                  onChange={handlechange}
                /><br />

                <input type="number" 
                  placeholder='Mobile Number' 
                  name='phonenumber' 
                  className='mt-5 border-2 border-gray-600 p-1 w-72 rounded-md'
                  onChange={handlechange}

                /><br />

                <input type="date" 
                  placeholder='Date of Birth' 
                  name='dob' 
                  className=' mt-5 border-2 border-gray-600 p-1 w-72 rounded-md'
                  onChange={handlechange}
                  /><br />

                <input type="email" 
                  placeholder='Email' 
                  name='email' 
                  className=' mt-5 border-2 border-gray-600 p-1 w-72 rounded-md'
                  onChange={handlechange}

                  /><br />

                <input type="password" 
                  placeholder='password' 
                  name='password' 
                  className='mt-5 border-2 border-gray-600 p-1 w-72 rounded-md'
                  onChange={handlechange}

                /><br />

                <button className='mt-7 border-2 bg-blue-600 text-white p-1 w-72 rounded-md' type='submit'>SIGN UP</button>
                <p className='text-sm text-gray-400'>Already Have an Account?<Link to={'/login'}> <button className='text-blue-400'>Sign In</button> </Link></p>
              </form>
            </div>
          </div>
        </div>
  )
}

export default Register