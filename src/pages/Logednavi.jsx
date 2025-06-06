import React, { useEffect, useState } from 'react'
import img1 from './civiceye.png'
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom';



const Logednavi = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const[item,setitem]=useState(false)
  
    const navigate=useNavigate()
  
  useEffect(()=>{
    const token=localStorage.getItem("token")
    setitem(!!token)
  },[])
  
  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

const logout=()=>{
    localStorage.removeItem("id")
    localStorage.removeItem("token")
    setitem(false);
    navigate('/')
}
 
  return (
    <div>
        <div className='flex justify-between'>
            <img src={img1} alt="" className='h-10 ms-20'/>
            <div className='flex gap-16 mt-4 font-bold'>
            <Link to={'/loged'}><h2>Home</h2></Link>
            {item&&(
              <Link to={'/loged/mycomplaints'}><h2>My Complaints</h2></Link>

            )}
            <Link to={'/about'}><h2>About</h2></Link>
            <Link to={'/contact'}><h2>Contact</h2></Link>
            </div>

            {!item?(
            <Link to={'/login'}> <button className='me-20 font-bold mt-3' >Login</button></Link>
            ):(
            <div className="relative inline-block">
            <button className='text-xl me-10 mt-4' onClick={toggleDropdown}><CgProfile /></button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <ul className="py-2 text-sm text-gray-700">
                    <Link to={'/profile'}><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li></Link>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={logout}>Logout</li>
                    </ul>
                </div>
              )}
                         
            </div>
            )}
          </div>
  </div>
  )
}


export default Logednavi