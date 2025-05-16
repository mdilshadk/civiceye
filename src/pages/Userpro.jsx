import React from 'react'
import img1 from './civiceye.png'

const Userpro = () => {
  return (
    <div className='mt-36 ml-64 border border-gray-600 rounded-lg h-[500px] w-[950px] text-center'>
    <div className='flex gap-16 '>
      {/* b1 */}
      <div className='p-16'>
          <img src={img1} alt="" className='h-10 w-44' />
          <input type="text" 
          placeholder='Full Name' 
          name='name' 
          defaultValue={"dilshad"}
          className=' mt-7 border-2 border-gray-600 p-1 w-72 rounded-md'
        /><br />

        <input type="number" 
          placeholder='Mobile Number' 
          name='number' 
          className='mt-5 border-2 border-gray-600 p-1 w-72 rounded-md'
        /><br />

        <input type="date" 
          placeholder='Date of Birth' 
          name='DOB' 
          className=' mt-5 border-2 border-gray-600 p-1 w-72 rounded-md'
          /><br />

        <input type="email" 
          placeholder='Email' 
          name='email' 
          className=' mt-5 border-2 border-gray-600 p-1 w-72 rounded-md'
          /><br />

        <input type="password" 
          placeholder='password' 
          name='password' 
          className='mt-5 border-2 border-gray-600 p-1 w-72 rounded-md'
        /><br />

      </div>
      <div className="h-80 w-px mt-20 bg-black"></div>

      {/* b2 */}
      <div>
        <input type="text" 
          placeholder='Full Name' 
          name='name' 
          className=' mt-24 border-2 border-gray-600 p-1 w-72 rounded-md '
        /><br />

        <input type="number" 
          placeholder='Mobile Number' 
          name='number' 
          className='mt-5 border-2 border-gray-600 p-1 w-72 h-24 rounded-md'
        /><br />

        
        <input type="email" 
          placeholder='Email' 
          name='email' 
          className=' mt-5 border-2 border-gray-600 p-1 w-72 rounded-md'
          /><br />

        <input type="password" 
          placeholder='password' 
          name='password' 
          className='mt-5 border-2 border-gray-600 p-1 w-72 rounded-md'
        /><br />
        
         </div>
         
    </div>
        <div>
            <button className='text-white p-1 w-16 rounded-md bg-blue-500'>Edit</button>
            <button className=' ms-5 p-1 text-white w-16 rounded-md bg-blue-500'>Submit</button>
         </div>
  </div>
  )
}

export default Userpro