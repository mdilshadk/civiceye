import React, { useEffect, useState } from 'react'

import img2 from './civic.png';
import img3 from './call.png'
import { FaRegCircleCheck } from "react-icons/fa6";
import { VscReport } from "react-icons/vsc";
import { FaTrophy } from "react-icons/fa";
import { ImHammer2 } from "react-icons/im";

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';
import Logednavi from './Logednavi';

const Guest = () => {
  const[item,setitem]=useState(false)
  useEffect(()=>{
      const token=localStorage.getItem("token")
      setitem(!!token)
    },[])
  
  return (
    <div>
      <div>
        <Logednavi></Logednavi>
      </div>
        
        
      <div className='mt-4' >
       <img src={img2} alt="" className='w-screen' />
       {!item?(
        <div className=' bg-black text-white text-4xl font-bold top-96 p-14 text-center' >
            <h1>Make Your Voice Heard!</h1>
            <h1>Report Problems, Help Your City, and</h1>
            <h1>Earn Rewards!</h1>
           <Link to={'/register'}> <button className='bg-blue-500 text-sm p-2 w-44 rounded-lg'>Sign up</button></Link>
        </div>
      ):(
        <div className='text-center mt-20'>
            <h1>register complaint</h1>
            <div className='flex justify-center gap-10 mt-10'>
              <Link to={'/regcomp'}><div className='h-44 w-44 bg-slate-50'>
                <h2>waste dumping</h2>
              </div></Link>
              <Link to={'/regcomp'}><div className='h-44 w-44 bg-slate-50'>
                <h2>Public nuicense</h2>
              </div></Link>
              <Link to={'/regcomp'}><div className='h-44 w-44 bg-slate-50'>
                <h2>Traffic violation</h2>
              </div></Link>
              <Link to={'/regcomp'}><div className='h-44 w-44 bg-slate-50'>
                <h2>others</h2>
              </div></Link>
            </div>
        </div>
      )}
      </div>
      <h1 className='text-center mt-10 text-xl font-bold'>Complaint Reports</h1>
      <div className='flex justify-evenly text-center mt-14 text-xl font-bold p-6'>
        
        <div className='border  shadow-2xl rounded-xl h-[150px] w-[200px] p-2'>
          <h1 className='ms-20 mb-5 font-bold'><FaRegCircleCheck /></h1>
          <h2>Complaints registeres</h2>
          <h1>1002</h1>
        </div>
        <div className='border shadow-2xl rounded-xl h-[150px] w-[200px] p-3 '>
          <h1 className='ms-20 mb-5 font-bold'><VscReport /></h1>
          <h2>Reports filed</h2>
          <h1>992</h1>
        </div>
        <div className='border shadow-2xl rounded-xl h-[150px] w-[200px] p-2 '>
          <h1 className='ms-20 mb-5 font-bold'><FaTrophy /></h1>
          <h2>Rewards distributed</h2>
          <h1>886</h1>
        </div>
        <div className='border shadow-xl rounded-xl h-[150px] w-[200px] p-2 '>
          <h1 className='ms-20 mb-5 font-bold'><ImHammer2 /></h1>
          <h2>Impact made</h2>
          <h1>........</h1>
        </div>
      </div>
      
      <h1 className='text-center mt-10 text-xl font-bold'>What we do</h1>
      <div className='flex justify-evenly text-center mt-16'>
        <div className='w-56 p-4 h-28  border border-blue-500 rounded-xl '>
          <p className=''>You register the Complaint</p>
        </div>
        <div className='w-56 p-4 h-28  border border-blue-500 rounded-xl'>
          <p>Our Team Verifies the complaint and shares it to the responsible authorities</p>
        </div>
        <div className='w-56 p-4 h-28  border border-blue-500 rounded-xl'>
          <p>The Responsible authorities processes the complaint</p>
        </div>
        <div className='w-56 p-4 h-28  border border-blue-500 rounded-xl'>
          <p>Your Incentive is provided once the complaint is processed</p>
        </div>
      </div>

      <h1 className='text-center mt-10 text-xl font-bold'>What our users have to say</h1>
      <div>
      <Carousel 
        autoPlay 
        infiniteLoop 
        interval={3000} 
        showThumbs={false}
        showStatus={false}
      >
                <div>
                  <div className='flex gap-20 ms-96 mt-10'>
                    <div className='border-2 border-gray-500 w-64 p-6 rounded-xl'>
                      <p>this is awesome website simplifires the complaint registartion process <br />-joimon</p>
                    </div>
                    <div className='border-2 border-gray-500 w-64 p-6 rounded-xl'>
                      <p>this is awesome website simplifires the complaint registartion process <br />-franse</p>
                    </div>
                  </div>
                </div>
                <div>
                <div className='flex gap-20 ms-96 mt-10'>
                    <div className='border-2 border-gray-500 w-64 p-6 rounded-xl'>
                      <p>this is awesome website simplifires the complaint registartion process <br />-ansil</p>
                    </div>
                    <div className='border-2 border-gray-500 w-64 p-6 rounded-xl'>
                      <p>this is awesome website simplifires the complaint registartion process <br />-john</p>
                    </div>
                  </div>
                </div>
                
        </Carousel>
          
      </div>
      <div className='ms-[550px] mt-14  border-2 border-gray-600 h-44 w-96 p-3 rounded-xl'>
              <input type="text" placeholder='Write your feedback'/>
              <button className='bg-blue-600 text-white ms-72 mt-24 p-2 rounded-xl'>Submit</button>
      </div>
      
      <div className='flex justify-center gap-20 mt-20'>

        <div className='flex gap-5 h-60 w-[550px] text-center  p-3 rounded-lg border border-black shadow-md'>
          <img src={img3} alt="" />
          <div >
            <h1 className='text-center mt-4 text-2xl'><IoIosMail /></h1>
            <h1>Support mail</h1><br />
            <p>For any assistance or inquires about reporting issues or using Civic Eye,feel to freeto reach out to us</p><br />
            <h2>support@Civiceye.com</h2>
          </div>
        </div>
        
        <div className='flex gap-5 h-60 w-[550px] text-center rounded-lg border border-black  p-3'>
          <img src={img3} alt="" />
          <div >
            <h1 className='text-center mt-4 text-2xl'><IoIosMail /></h1>
            <h1>Support mail</h1><br />
            <p>For any assistance or inquires about reporting issues or using Civic Eye,feel to freeto reach out to us</p><br />
            <h2>support@Civiceye.com</h2>
          </div>
        </div>

      </div>

      <div className='flex justify-evenly  bg-black text-white p-5 mt-14'>
            <div>
              <h1>Phone Numbers</h1><br />
              <h2>Military</h2>
              <h2>(123) 456-7890</h2>
              <h2>(123) 456-7540</h2><br />
              <h2>State Police</h2>
              <h2>(123) 456-7891</h2><br />
              <h2>Fire Department</h2>
              <h2>(123) 456-7892</h2>
            </div>

            <div>
            <h1>Contact Info</h1><br />
              
              <h2>Softronics</h2>
              <h2>(+12) 34-5678</h2>
              <h2>Softroniics@gmail.com </h2>
            </div>
            
            <div>
            <h2>Quick links</h2><br />
            <ul >
              <li>Home</li>
              <li>Complaints</li>
              <li>Register</li>
              <li>Login</li>
            </ul>
              </div>
          </div>
    </div>
  )
}

export default Guest