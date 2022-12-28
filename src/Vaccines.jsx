import React from 'react'
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './index.css';


const India = [
    { label: '27/12/22',Vaccine: 1041, },
    { label: '28/12/22',Vaccine: 35, },
    { label: '29/12/22',Vaccine: 75, },
    { label: '30/12/22',Vaccine: 500                       , },
    { label: '31/12/22',Vaccine: 41, },
    { label: '01/01/23',Vaccine: 47,  },
    { label: '02/01/23',Vaccine: 43, }
  ];
function Vaccines() {
  return (
    <div>
        <div className="row">
      <div className="col-md-12">
        <h2 style={{color:"#FD0053"}}>Covid-19 Vaccine</h2>
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
              <Line type="monotone" dataKey="Vaccine" stroke="#FD0053" />
              {/* <Line type="monotone" dataKey="Death" strok="#43d9e7" /> */}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Vaccines
