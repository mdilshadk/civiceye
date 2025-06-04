import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Allcomplaints = () => {

  const[data,setdata]=useState([])

  const id=localStorage.getItem("id");
  const token=localStorage.getItem("token")

  const viewcomplaint=async()=>{
    let response=await axios.get(`https://civiceye-1-d7k7.onrender.com/auth/viewcomp/${id}`,{
      headers:{Authorization:`Bearer ${token}`}
    })
    setdata(response.data)
  }
  useEffect(()=>{
    viewcomplaint();
  },[])
  console.log(data);
  
  return (
    <div>
       

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black mt-10">
        <thead class="text-xs text-black uppercase bg-gray-50  dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    DISCRIPTION
                </th>
                <th scope="col" class="px-6 py-3">
                    COMPLAINT TYPE
                </th>
                <th scope="col" class="px-6 py-3">
                    LOCATION
                </th>
                <th scope="col" class="px-6 py-3">
                    PROOF
                </th>
                <th scope="col" class="px-6 py-3">
                    STATUS
                </th>
            </tr>
        </thead>
         {
            data.map((item,index)=>(
              <tbody key={index}>
         
            <tr class="  dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap ">
                    {item.description}
                </th>
                <td class="px-6 py-4">
                    {item.complainttype}
                </td>
                <td class="px-6 py-4">
                    {item.location}
                </td>
                <td class="px-6 py-4">
                  <img src={`https://civiceye-1-d7k7.onrender.com/uploads/${item.proof}`} alt="" className='h-20 w-15 rounded-md' />

                </td>
                <td class="px-6 py-4">
                    {item.status}
                </td>
            </tr>
            
            
        </tbody>
            ))
          }
        
    </table>
</div>

    </div>
  )
}

export default Allcomplaints