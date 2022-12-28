import React from 'react';
import './index.css';
import state from './State';

function StateTable() {
  return (
    <div>

    <div className="stateTabel">
        <div className="table">
        <h2>Covid-19 status of all state</h2>
    <h5>Last Update:27-12-2022:18:34</h5>
      <table>
        <thead>
            <tr>
            <th>State</th>
                <th>New case</th>
                <th>Death</th>
                <th>Vaccine</th>
                <th>Recover</th>
            </tr>
        </thead>
        <tbody>
            {
                state.map((item,i)=>{
                    return(
                        <tr key={i}>
                            <td>{item.states}</td>
                            <td>{item.New}</td>
                            <td>{item.Death}</td>
                            <td>{item.Vaccine}</td>
                            <td>{item.Recover}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
        </div>
        <div className="map">
        <h2>Indian Map</h2>
            <img src="https://www.mapsofindia.com/images2/india-map.jpg" alt="India Map" />
        </div>
    </div>
    </div>
  )
}

export default StateTable
