import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const studentData = [
        {
          id: 1,
          name: "John",
          physics: 80,
          chemistry: 90,
          biology: 75
        },
        {
          id: 2,
          name: "Sarah",
          physics: 85,
          chemistry: 70,
          biology: 90
        },
        {
          id: 3,
          name: "Peter",
          physics: 60,
          chemistry: 80,
          biology: 65
        },
        {
          id: 4,
          name: "Jane",
          physics: 90,
          chemistry: 85,
          biology: 80
        },
        {
          id: 5,
          name: "Tom",
          physics: 70,
          chemistry: 75,
          biology: 65
        },
        {
          id: 6,
          name: "Lisa",
          physics: 95,
          chemistry: 90,
          biology: 95
        },
        {
          id: 7,
          name: "Mike",
          physics: 75,
          chemistry: 60,
          biology: 80
        },
        {
          id: 8,
          name: "Emily",
          physics: 85,
          chemistry: 90,
          biology: 85
        },
        {
          id: 9,
          name: "Alex",
          physics: 80,
          chemistry: 70,
          biology: 75
        },
        {
          id: 10,
          name: "Grace",
          physics: 95,
          chemistry: 95,
          biology: 95
        },
        {
          id: 11,
          name: "Oliver",
          physics: 70,
          chemistry: 80,
          biology: 75
        },
        {
          id: 12,
          name: "Mia",
          physics: 90,
          chemistry: 85,
          biology: 80
        }
      ];
      
    return (
        <div className=' bg-slate-300 w-3/6 mx-auto mt-5'>
            <div className='p-8 justify-center items-center'>
                <LineChart
                width={500}
                height={300}
                data={studentData}
                >
                    <Line dataKey="physics"></Line>
                    <Line dataKey="chemistry" stroke="#82ca9d"></Line>
                    <YAxis></YAxis>
                    <Tooltip />
                    <XAxis dataKey="name" />

                </LineChart>
            </div>
           
                
            
            
        </div>
    );
};

export default Dashboard;