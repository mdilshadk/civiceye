import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Complaints = () => {

    const[data,setdata]=useState([])
    
    const token=localStorage.getItem("token")
    
    const adminview=async()=>{
        let response=await axios.get("http://localhost:5000/auth/admincomp",{
            headers:{Authorization:`Bearer ${token}`}
        })
        setdata(response.data)
    }
    console.log(data);
    
    useEffect(()=>{
        adminview();
      },[])
  return (
    <div>
      <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black mt-10">
        <thead class="text-xs text-black uppercase bg-gray-50  dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Date & Time
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    Uploder
                </th>
                <th scope="col" class="px-6 py-3">
                    type
                </th>
                <th scope="col" class="px-6 py-3">
                    Submissions
                </th>
            </tr>
        </thead>
         {
            data.map((item,index)=>(
              <tbody key={index}>
         
            <tr class="  dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap ">
                    {item.complaint.createdAt}
                </th>
                <td class="px-6 py-4">
                    {item.complaint.description}
                </td>
                <td class="px-6 py-4">
                    {item.user.name}
                </td>
                <td class="px-6 py-4">
                    {item.complaint.complainttype}
                </td>
                <td class="px-6 py-4">
                    <div className='flex gap-3'>
                    <button>Reject</button>
                    
                    <button>resolve</button>
                    </div>
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

export default Complaints