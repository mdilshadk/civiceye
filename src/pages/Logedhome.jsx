import React from 'react'
import Logednavi from './Logednavi'
import { Route, Routes } from 'react-router-dom'
import Allcomplaints from './Allcomplaints'
import Userpro from './Userpro'
import Guest from './Guest'


const Logedhome = () => {
  return (
    <div>
       
        <div>
        <Routes>
            <Route index element={<Guest></Guest>} ></Route>
            <Route path='/mycomplaints' element={<Allcomplaints></Allcomplaints>}></Route>
            <Route path='/profile' element={<Userpro></Userpro>}></Route>


        </Routes>
        </div>
    </div>
  )
}

export default Logedhome