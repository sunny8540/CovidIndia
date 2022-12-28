import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Error from './Error';  
import NewcaseGraph from './NewcaseGraph';
import Death from './Death';
import Recovery from './Recovery';
import Vaccines from './Vaccines';
import AllData from './AllData';
import './index.css';
import StateTable from './StateTable';

function App() {
  return (
    <div>
    <div className="headermain">
    <h1>Covid-19 Info data</h1>
    <div className="img">
      <img src="https://media.gettyimages.com/id/1219873916/vector/coronavirus-icon.jpg?s=612x612&w=0&k=20&c=GV59Ka9wZJyq4H09-7lqfJhnfz5OJU9uNvhTLJtDND4=" alt="covid-19" />
    </div>
    </div>
 <div className="header">
  <div className="NewCase">
    <NewcaseGraph />
  </div>
  <div className='Death'>
    <Death />
  </div>
  <div className="Recovery">
  <Recovery />
  </div>
  <div className="Vaccine">
    <Vaccines />  
  </div>
 </div>
  <AllData/>
<div className="statetable">
  <StateTable />
</div>
<div className="footer">@This website is not responsible for incorrect data</div>
    </div>
  )
}

export default App
