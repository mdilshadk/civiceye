import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Allcomplaints = () => {
const [isOpen, setIsOpen] = useState(false);

 

  const[data,setdata]=useState([])

  const id=localStorage.getItem("id");
  const token=localStorage.getItem("token")

  const viewcomplaint=async()=>{
    let response=await axios.get(`https://civiceye-1-d7k7.onrender.com/auth/viewcomp/${id}`,{
      headers:{Authorization:`Bearer ${token}`}
    })
    setdata(response.data.reverse())
  }
  useEffect(()=>{
    viewcomplaint();
  },[])
  console.log(data);
  
  return (
    <div>

    <Link to={'/'}><button className='h-10 w-28 bg-blue-500 text-white rounded-md ms-5 mt-2'>Back</button></Link>
    <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black mt-5">
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
                <td className="px-6 py-4">
                    <img src={`https://civiceye-1-d7k7.onrender.com/uploads/${item.proof}`} 
                        alt="" 
                        className="h-20 w-20 rounded-md cursor-pointer object-cover "
                        onClick={() => setIsOpen(true)}/>

                 </td>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={`https://civiceye-1-d7k7.onrender.com/uploads/${item.proof}`} 
            alt="Proof enlarged"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
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