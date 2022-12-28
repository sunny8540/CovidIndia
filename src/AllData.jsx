import React from 'react';
import './index.css';
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const India = [
    { label: '27/12/22', NewCase: 21, Death: 41,Vaccine:334,Recovery:300 },
    { label: '28/12/22', NewCase: 35, Death: 79,Vaccine:33,Recovery:104 },
    { label: '29/12/22', NewCase: 75, Death: 57,Vaccine:32,Recovery:303 },
    { label: '30/12/22', NewCase: 51, Death: 47,Vaccine:90,Recovery:503 },
    { label: '31/12/22', NewCase: 41, Death: 63,Vaccine:60,Recovery:200 },
    { label: '01/01/23', NewCase: 47, Death: 500,Vaccine:33,Recovery:240 },
    { label: '02/01/23', NewCase: 43, Death: 72,Vaccine:339,Recovery:900 }
  ];
function AllData() {
  return (
    <div>
       <div className="row">
      <div className="col-md-12">
        <h2>Covid-19 India all over view</h2>
      </div>

      <div className="section col-md-6">
        {/* <h3 className="section-title">Line Chart</h3> */}
        <div className="section-content">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={India} margin={{ top: 15, right: 10, bottom: 30, left: 0 }}>
              <Tooltip />
              <XAxis dataKey="label" />
              <YAxis />
              {/* <CartesianGrid stroke="#aaa" strokeDasharray="" /> */}
              <Legend/>
              <Line type="monotone" dataKey="NewCase" stroke="#e2424a" />
              <Line type="monotone" dataKey="Death" stroke="#b45c6c" />
              <Line type="monotone" dataKey="Recovery" stroke="#399169" />
              <Line type="monotone" dataKey="Vaccine" stroke="#000" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AllData
