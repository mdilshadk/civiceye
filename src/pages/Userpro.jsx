import React, { useEffect, useState } from 'react'
import img1 from './civiceye.png'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const Userpro = () => {

  const[data,setdata]=useState({})
  const navigate=useNavigate()
  
    const id=localStorage.getItem("id");
    const token=localStorage.getItem("token")
  
    const viewprofile=async()=>{
      let response=await axios.get(`http://localhost:5000/auth/profilev/${id}`,{
        headers:{Authorization:`Bearer ${token}`}
      })
      setdata(response.data)
    }
    console.log(data);
    
    useEffect(()=>{
      viewprofile();
    },[])

    const editp=async(event)=>{
      event.preventDefault()

      let ed=await axios.put(`http://localhost:5000/auth/editp/${id}`,data)
      setdata(ed.data)
      viewprofile()
      navigate('/guest')  
      toast.success('Edited successfully')


    }
    const handlechange=(event)=>{
      setdata({...data,[event.target.name]:event.target.value})
    }
  return (
    <div className='mt-36 ml-64 border border-gray-600 rounded-lg h-[500px] w-[950px] text-center'>
                <div><Toaster/></div>

    <form action="" onSubmit={editp}>
    <div className='flex gap-16 '>
      {/* b1 */}
      <div className='p-16'>
        <img src={img1} alt="" className='h-10 w-44' />
        <input type="text"
          value={data.name}
          name='name'
          className='mt-7 border-2 border-gray-600 p-1 w-72 rounded-md'
        onChange={handlechange}/><br />

        <input type="number"
          value={data.phonenumber}
          name='phonenumber'
          className='mt-5 border-2 border-gray-600 p-1 w-72 rounded-md'
        onChange={handlechange}/><br />

        <input type="email"
          value={data.email}
          name='email'
          className='mt-5 border-2 border-gray-600 p-1 w-72 rounded-md'
        onChange={handlechange}/><br />

        <input type="date"
          value={data.dob}
          name='dob'
          className='mt-5 border-2 border-gray-600 p-1 w-72 rounded-md'
        onChange={handlechange}/><br />
    </div>

      <div className="h-80 w-px mt-20 bg-black"></div>

      {/* b2 */}
      <div>
        <select value={data.state} className='mt-20 border-2 border-gray-600 p-1 w-72 rounded-md'
        name='state'
        onChange={handlechange}>
          <option value="">state</option>
          <option value="kerala">kerala</option>
          <option value="tamilnad">tamilnad</option>
          <option value="karnataka">karnataka</option>
          <option value="maharashtra">maharashtra</option>
        </select><br />

        <input type="text"
          value={data.address}
          name='address'
          placeholder='address'
          className='mt-5 border-2 border-gray-600 p-1 w-72 h-24 rounded-md'
        onChange={handlechange}/><br />

        <select value={data.idproof} className='mt-5 border-2 border-gray-600 p-1 w-72 rounded-md' name='idproof' onChange={handlechange}>
          <option value="">id proof</option>
          <option value="adhar">adhar</option>
          <option value="licence">licence</option>
          <option value="pancard">pancard</option>
        </select><br />

        <input type="number"
          value={data.proofno}
          name='proofno'
          placeholder='id proof number'
          className='mt-5 border-2 border-gray-600 p-1 w-72 rounded-md'
        onChange={handlechange}/><br />
      </div>
    
  </div>

    

        <div>
            <Link to={'/guest'}><button className='text-white p-1 w-16 rounded-md bg-blue-500' >Back</button></Link>
            <button className=' ms-5 p-1 text-white w-16 rounded-md bg-blue-500' type='submit' >Submit</button>
         </div>
    </form>
  </div>
  )
}

export default Userpro