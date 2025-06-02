import React, { useState } from 'react'
import img1 from './civiceye.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {
  const [data,setdata]=useState({})
  const navigate=useNavigate()


  const logi=async(event)=>{
    event.preventDefault();
  try{
    let response=await axios.post("https://civiceye-1-d7k7.onrender.com/auth/login",data);

    if (response.status===201) {
      localStorage.setItem("id", response.data._id);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("usertype", response.data.usertype);

      
      if (response.data.usertype === 'admin') {
        navigate("/admin");        
        
      }
      else{
        navigate('/loged')
      }
    }
        toast.success('Loged in successfully')

      
  }
  catch(error){
    if (error.response && error.response.data.message) {
      toast.error('Email or Password is incorrect')
      
    } 
  }
  
}
  const handlechange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
  }
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
        <div className="h-72 w-px mt-20 bg-black"></div>
        <div>
          <h1 className='mt-20 '><b>SIGN IN</b></h1>
          <form action="" onSubmit={logi}>
          <input type="email" 
            placeholder='Email'
            name='email' 
            className=' mt-10 border-2 border-gray-600 p-1 w-72 rounded-md'
            onChange={handlechange}/><br /><br />
          <input type="password" 
          placeholder='password' 
          name='password' 
          className='border-2 border-gray-600 p-1 w-72 rounded-md'
          onChange={handlechange}/>
          <h5 className='text-end text-blue-600'>Forgot Password ?</h5>
          <button className='mt-10 border-2 bg-blue-600 text-white p-1 w-72 rounded-md'type='submit'>SIGN IN</button>
          <p className='text-sm text-gray-400'>Don't Have an Account? <Link to={'/register'}> <button className='text-blue-400'>Sign up</button> </Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login