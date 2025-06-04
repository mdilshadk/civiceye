import React, { PureComponent, useEffect, useState } from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { CgPlayListRemove } from "react-icons/cg";

import {
 BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import axios from 'axios';




class ChartComponent extends PureComponent {
  render() {
    return (
       <ResponsiveContainer width="100%" height={200}>
        <BarChart data={this.props.data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="uv" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class PieChartComponent extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            paddingAngle={0}
            dataKey="value"
          >

            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
         
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

const options = {
  plugins: {
    legend: { display: true, position: "top" },
  },
  scales: {
    y: { beginAtZero: true },
  },
};
const Overview = () => {
    
    const [stats, setStats] = useState({
  month: 0,
  verified: 0,
  pending: 0,
  rejected: 0,
  locations: [],
});

      useEffect(() => {
        const fetchStats = async () => {
          try {
           const response = await axios.get("https://civiceye-1-d7k7.onrender.com/auth/overview");
            setStats({
              ...response.data,
              locations: response.data.locations.map(loc => ({
                name: loc._id,
                value: loc.count,
              }))
            });
          } catch (error) {
            console.error("Error fetching stats:", error);
          }
        };
         fetchStats();
      }, []);
      console.log(stats);
      

      const data = [
  { name: "Verified", uv: stats.verified },
  { name: "Pending", uv: stats.pending },
  { name: "Rejected", uv: stats.rejected },
];

  return (
     <div className='flex p-10'>
        
        <div className='  rounded-lg p-'>
      
       <h1 className=' font-bold mb-7'>Welcome, </h1>
       <div className='flex gap-8 ml-1' >
        <div className='flex gap-5'>
          <div className='bg-white p-3 rounded-lg w-56 h-28 shadow-md'>
          <h1 className='flex justify-center items-center mb-4 gap-7 text-[18px] font-bold '><h2>This month</h2><FaCalendarAlt /></h1>
          <h1 className='text-[30px] font-bold flex flex-col justify-center items-center'>{stats.month}</h1>
          </div>

          <div  className='bg-white p-3 rounded-lg w-56 h-28 shadow-md'>
            <h1 className='flex justify-center items-center mb-4  gap-7 text-[18px] font-bold'><h2>Verified cases</h2><IoCheckmarkCircleOutline /></h1>
            <h1 className='text-[30px] font-bold flex flex-col justify-center items-center'>{stats.verified}</h1>
          </div>
        </div>


        <div className='flex gap-5'>
            <div  className='bg-white p-3 rounded-lg w-56 h-28 shadow-md'>
            <h1 className='flex justify-center items-center mb-4 text-[18px] font-bold gap-7'><h2>Pending</h2><LuClock /></h1>
            <h1 className='text-[30px] font-bold flex flex-col justify-center items-center'>{stats.pending}</h1>
          </div>

           <div  className='bg-white p-3 rounded-lg w-56 h-28 shadow-md'>
            <h1 className='flex justify-center items-center mb-4 text-[18px] font-bold gap-7'><h2>Rejected</h2><CgPlayListRemove /></h1>
            <h1 className='text-[30px] font-bold flex flex-col justify-center items-center'>{stats.rejected}</h1>
          </div>
          
        </div>
       </div>

      

        <div className='flex justify-center items-center gap-9 mt-16'>
        <div className='w-1/2 bg-white flex flex-col justify-center items-center rounded-lg p-4 h-96 shadow-md'> 
        <h1 className='mb-4 text-[19px] font-bold '>Month Review</h1>
          <ChartComponent data={data} />
         <p><b className='text-[17px]'>30% Registerd</b> <span className='text-[14px]'>30% more complaits in this mouth</span></p> 
         <button className='text-blue-600 bg-blue-200 w-56 rounded-md mt-4  h-9'>Deateails</button>
         </div>

       <div className='w-1/2 bg-white flex flex-col justify-center items-center rounded-lg p-4 h-96 shadow-md'> 
          <h2 className='font-bold text-[18px] '>March 2025</h2>
          <PieChartComponent data={stats.locations} />
          <div className='flex gap-24 font-bold text-[15px]'>
              {stats.locations.slice(0, 4).map((loc, idx) => (
          <div key={idx}>
          <h3>{loc.name}</h3>
        </div>
  ))}
</div>
        </div>
      

       </div>

      
       </div>
        
    </div>


  )
}

export default Overview