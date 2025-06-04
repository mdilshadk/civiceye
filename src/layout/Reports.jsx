import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Reports = () => {

  const[data,setdata]=useState([])
  
  const token=localStorage.getItem("token")
  const feedbackview=async()=>{
        let response=await axios.get("https://civiceye-1-d7k7.onrender.com/auth/feedview",{
            headers:{Authorization:`Bearer ${token}`}
        })
        setdata(response.data)
    }
    console.log(data);
    
    useEffect(()=>{
        feedbackview()
    },[])
  return (
    <div>
      <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black mt-10">
        <thead class="text-xs text-black uppercase bg-gray-50  dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    name
                </th>
                <th scope="col" class="px-6 py-3">
                    feedbacks
                </th>
            </tr>
        </thead>
         {
            data.map((item,index)=>(
              <tbody key={index}>
         
            <tr class="  dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap ">
                    {item.user.name}
                </th>
                <td class="px-6 py-4">
                    {item.feedbacks.feed}
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

export default Reports