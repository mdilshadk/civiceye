import React, { useState } from 'react'
import Sidebar from '../pages/Sidebar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Overview from './Overview'
import Complaints from './Complaints'
import Userman from './Userman'
import Reports from './Reports'
const Admin = () => {

  
  
  

  
  return (
    <div className='flex gap-5'>
        <Sidebar></Sidebar>
        <div>
        <Routes>
            <Route index element={<Overview></Overview>} ></Route>
            <Route path='/complaints' element={<Complaints></Complaints>} ></Route>
            <Route path='/userman' element={<Userman></Userman>} ></Route>
            <Route path='/reports' element={<Reports></Reports>} ></Route>


        </Routes>
        </div>
    </div>
  )
}

export default Admin