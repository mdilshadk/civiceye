import React from 'react'

const Contact = () => {
  return (
    <div className='mt-36 ml-64 border border-gray-600 rounded-lg h-auto w-[950px] p-8 bg-white shadow-lg text-gray-800'>
      <h1 className='text-3xl font-bold mb-4 text-center text-blue-700'>Contact Us</h1>

      <p className='mb-6 text-center'>
        Have questions, suggestions, or need assistance? We're here to help. Reach out to us through the information below or use the form provided.
      </p>

      <div className='space-y-4'>
        <div>
          <h2 className='text-xl font-semibold'>Email</h2>
          <p>support@civiceye.in</p>
        </div>

        <div>
          <h2 className='text-xl font-semibold'>Phone</h2>
          <p>+91 98765 43210</p>
        </div>

        <div>
          <h2 className='text-xl font-semibold'>Address</h2>
          <p>Civic Eye Office, 2nd Floor, Public Service Lane, Main City, India</p>
        </div>
      </div>

      <div className='mt-8'>
        <h2 className='text-2xl font-semibold mb-4'>Send Us a Message</h2>
        <form className='space-y-4'>
          <div>
            <label className='block text-sm font-medium'>Name</label>
            <input type='text' className='w-full border border-gray-400 rounded-md p-2' placeholder='Your Name' />
          </div>

          <div>
            <label className='block text-sm font-medium'>Email</label>
            <input type='email' className='w-full border border-gray-400 rounded-md p-2' placeholder='Your Email' />
          </div>

          <div>
            <label className='block text-sm font-medium'>Message</label>
            <textarea className='w-full border border-gray-400 rounded-md p-2 h-32' placeholder='Your Message'></textarea>
          </div>

          <button
            type='submit'
            className='bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact