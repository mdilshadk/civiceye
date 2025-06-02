import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './pages/Register';
import Userpro from './pages/Userpro';
import Guest from './pages/Guest';
import Home from './pages/Home';
import Sidebar from './pages/Sidebar';
import Admin from './layout/Admin';
import Regcomplaints from './pages/Regcomplaints';
import Logedhome from './pages/Logedhome';
import About from './pages/About';
import Contact from './pages/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login></Login>} ></Route>
          <Route path='/register' element={<Register></Register>} ></Route>
          <Route path='/profile' element={<Userpro></Userpro>} ></Route>
          <Route path='/' element={<Guest></Guest>} ></Route>
          <Route path='/home' element={<Home></Home>} ></Route>
          <Route path='/sidebar' element={<Sidebar></Sidebar>} ></Route>
          <Route path='/admin/*' element={<Admin></Admin>} ></Route>
          <Route path='/regcomp' element={<Regcomplaints></Regcomplaints>} ></Route>
          <Route path='/loged/*' element={<Logedhome></Logedhome>} ></Route>
          <Route path='/about' element={<About></About>} ></Route>
          <Route path='/contact' element={<Contact></Contact>} ></Route>







        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
