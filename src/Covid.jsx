import React from 'react'
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const India = [
  { label: '27/12/22', NewCase: 21, Death: 41 },
  { label: '28/12/22', NewCase: 35, Death: 79 },
  { label: '29/12/22', NewCase: 75, Death: 57 },
  { label: '30/12/22', NewCase: 51, Death: 47 },
  { label: '31/12/22', NewCase: 41, Death: 63 },
  { label: '01/01/23', NewCase: 47, Death: 500 },
  { label: '02/01/23', NewCase: 43, Death: 72 }
];

export default function Recharts() {
  return (
    <div className="row">
      <div className="col-md-12">
        <h2>Covid-19 India statue</h2>
      </div>

      <div className="section col-md-6">
        {/* <h3 className="section-title">Line Chart</h3> */}
        <div className="section-content">
          <ResponsiveContainer width="20%" height={200}>
            <LineChart data={India} margin={{ top: 15, right: 10, bottom: 30, left: 0 }}>
              <Tooltip />
              <XAxis dataKey="label" />
              <YAxis />
              {/* <CartesianGrid stroke="#aaa" strokeDasharray="" /> */}
              <Legend/>
              <Line type="monotone" dataKey="NewCase" stroke="#FD0053" />
              <Line type="monotone" dataKey="Death" strok="#43d9e7" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="section col-md-6">
        <h3 className="section-title">Bar Chart</h3>
        <div className="section-content">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={India} margin={{ top: 15, right: 0, bottom: 15, left: 0 }}>
              <XAxis dataKey="label" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Tooltip />
              <Legend/>
              <Bar dataKey="NewCase" fill="#FB8833" />
              <Bar dataKey="Death" fill="#17A8F5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  )
}