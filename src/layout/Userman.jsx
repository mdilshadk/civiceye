import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Userman = () => {

    const[data,setdata]=useState([])
      
      
    const users=async()=>{
        let response=await axios.get("https://civiceye-1-d7k7.onrender.com/auth/users",data)
          setdata(response.data)
        }
        console.log(data);
        
        useEffect(()=>{
          users()
        },[])
  return (
   <div>
    
            <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black mt-10" >
            <thead class="text-xs text-black uppercase bg-gray-50  dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    email
                </th>
                <th scope="col" class="px-6 py-3">
                    phone
                </th>
                <th scope="col" class="px-6 py-3">
                    address
                </th>
                <th scope="col" class="px-6 py-3">
                    id proof
                </th>
                
            </tr>
        </thead>
        
         
         <tbody >
        {
            data.map((item,index)=>(
         
            <tr class="  dark:border-gray-700 border-gray-200" key={index}>
                <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap ">
                    {item.name}
                </th>
                <td class="px-6 py-4">
                    {item.email}
                </td>
                <td class="px-6 py-4">
                    {item.phonenumber}
                </td>
                <td class="px-6 py-4">
                    {item.address}
                </td>
                <td class="px-6 py-4">
                    {item.idproof}
                </td>
            </tr>
            ))
    }
            
        </tbody>
            
        
    </table>
</div>
        
      



    </div>
  )
}

export default Userman