import React, { useState } from 'react';
// import SideNavbar from './Components/SideNavabar';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Monitoring from './Components/Monitoring';
import Flagging from './Components/Flagging';
import Onboarding from './Components/Onboarding';
import Overview from './Components/Overview';
import SourceOfIncome from './Components/SourceOfIncome';
import SideNavbar from './Components/SideNavbar.js';
import UAR from './Components/UAR/index.js';
import "./App.css";
import Search from './Components/Search/index.js';
const PendingData=[
  {
      id:1,
      name: "Sam Altman", 
      email: "sam.altman123@gmail.com",
      risk_level:"Medium",
      trigger_reason:"IP Change",
      days:4,
      date:"12-oct-2023",
      previously_reviewed:"Yes",
      review_date:"23-Aug-2023"

  },
  {
      id:2,
      name: "Sameer Choubey", 
      email: "sameerchoubay123@gmail.com",
      risk_level:"High",
      trigger_reason:"FIFO",
      days:4,
      date:"12-oct-2023",
      previously_reviewed:"No",
      
  },
  {
      id:3,
      name: "Adarsh Panikkar", 
      email: "adarsh@onjuno.com",
      risk_level:"Low",
      trigger_reason:"IP Change",
      days:5,
      date:"12-oct-2023",
      previously_reviewed:"No",
      
  },
  {
      id:4,
      name: "Prathik Shetty", 
      email: "patik3@gmail.com",
      risk_level:"High",
      trigger_reason:"FIFO",
      days:5,
      date:"12-oct-2023",
      previously_reviewed:"Yes",
      review_date:"12-sep-2023"
  },
  {
      id:5,
      name: "Elon Musk", 
      email: "elan@twitter.com",
      risk_level:"Low",
      trigger_reason:"FIFO",
      days:5,
      date:"12-oct-2023",
      previously_reviewed:"Yes",
      review_date:"12-sep-2023"

  },
  {
      id:6,
      name: "Trina Kundu", 
      email: "trina@anhuno.com",
      risk_level:"Low",
      trigger_reason:"FIFO",
      days:5,
      date:"12-oct-2023",
      previously_reviewed:"Yes",
      review_date:"12-sep-2023"
  }

]


const completedData=[
  {
      id:1,
      name: "Sam Altman", 
      email: "sam.altman123@gmail.com",
      risk_level:"Medium",
      action_reason:"Flagged",
      days:14,
      date:"12-oct-2023",
     action_taken:"Neil",
     action_taken_email:"neil@onjuno.com",

  },
  {
      id:2,
      name: "Sameer Choubey", 
      email: "sameerchoubay123@gmail.com",
      risk_level:"High",
      action_reason:"Closed",
      days:14,
      date:"12-oct-2023",
      action_taken:"Prathik",
      action_taken_email:"prathik@onjuno.com",
      
  },
  {
      id:3,
      name: "Adarsh Panikkar", 
      email: "adarsh@onjuno.com",
      risk_level:"Low",
      action_reason:"Cleared",
      days:15,
      date:"12-oct-2023",
      action_taken:"Prashanth",
     action_taken_email:"prashanth@onjuno.com",
      
  },
  {
      id:4,
      name: "Prathik Shetty", 
      email: "patik3@gmail.com",
      risk_level:"High",
      action_reason:"SOI requested",
      days:15,
      date:"12-oct-2023",
      action_taken:"Rasleen Kaur",
      action_taken_email:"rasleen@onjuno.com",
       
  },
  {
      id:5,
      name: "Elon Musk", 
      email: "elan@twitter.com",
      risk_level:"Low",
      action_reason:"Flagged",
      days:15,
      date:"12-oct-2023",
      action_taken:"Prathik Shetty",
     action_taken_email:"pathink@onjuno.com",

  },
  {
      id:6,
      name: "Trina Kundu", 
      email: "trina@anhuno.com",
      risk_level:"Low",
      action_reason:"closed",
      days:15,
      date:"12-oct-2023",
      action_taken:"Varun Deshpande",
      action_taken_email:"varun@onjuno.com",
  }
]



function App(){

   
  return(
    <div className='container'>
    
      <SideNavbar />
      {/* <Search /> */}
      <Routes>
      <Route path="/" element={<Monitoring completedData={completedData} 
       PendingData={PendingData} />}/>
      <Route path="/flagging" element={<Flagging />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/overview" element={<Overview/>} />
      <Route path="/source" element={<SourceOfIncome />} />
      <Route path="/uar" element={<UAR />} />
      </Routes>
      
      
    
    
      
      
    </div>
  )
}
export default App;
// pendingDataVisible={pendingDataVisible} FetchcompletedData={FetchcompletedData} FetchPendingData={FetchPendingData}/>}