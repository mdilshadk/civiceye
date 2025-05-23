import React, { useState } from 'react'
import img1 from './civiceye.png'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Sidebar = () => {

  const params=useParams()

    console.log("wildcard path : ",params["*"]);

  const[item,setitem]=useState(false)
  const navigate=useNavigate()
    

  const logout=()=>{
    localStorage.removeItem("id")
    localStorage.removeItem("token")
    setitem(false);
    navigate('/guest')
  }
    

  return (
    <div className='w-[250px]  h-screen shadow-lg'>
        <img src={img1} alt="" className='h-10 ms-5'/>
        <div className='mt-10 gap-5 ms-5 p-2'>
      <Link to={'/admin'} ><h1 className={`${params["*"] ==='' ? 'bg-blue-500 text-white':'bg-white'} p-3  rounded-md shadow-md mb-3 font-bold hover:bg-gray-200`}>Overview</h1></Link> 
      <Link to={'/admin/complaints'} ><h1 className={`${params["*"] ==='complaints' ? 'bg-blue-500 text-white':'bg-white'} p-3  rounded-md shadow-md mb-3 font-bold hover:bg-gray-200`}>Complaints</h1></Link> 
      <Link to={'/admin/userman'} ><h1 className={`${params["*"] ==='userman' ? 'bg-blue-500 text-white':'bg-white'} p-3  rounded-md shadow-md mb-3 font-bold hover:bg-gray-200`}>User Management</h1></Link> 
      <Link to={'/admin/reports'} ><h1 className={`${params["*"] ==='reports' ? 'bg-blue-500 text-white':'bg-white'} p-3  rounded-md shadow-md mb-3 font-bold hover:bg-gray-200`}>Feedback</h1></Link> 
      <button className='mt-[350px] ms-5 text-center bg-red-500 w-40 h-10 text-white rounded-lg font-bold'onClick={logout}>Logout</button>
       
       </div>
       
    </div>
  )
}

export default Sidebar