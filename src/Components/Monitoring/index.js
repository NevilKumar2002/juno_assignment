/* eslint-disable array-callback-return */
import React, { useState } from "react";
import "./style.css";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import PanoramaFishEyeRoundedIcon from '@mui/icons-material/PanoramaFishEyeRounded';
import Search from "../Search";
import CloseAccount from "../CloseAccount";
function Monitoring({completedData, PendingData}){
        const [completeData, setCompleteData]=useState([]);
        const [pendingData, setpendingData]=useState([]);
        const [completeDataVisible, setCompleteDataVisible]= useState(false);
        const [pendingDataVisible, setpendingDataVisible]= useState(true);
        const [activePendingButton, setPendingActiveButton] = useState(true);
        const [activeCompleteButton, setCompleteActiveButton] = useState(false);
        const[search, setSearch]=useState("");
        const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);


        // console.log("Search", search)
        var filteredValue = PendingData.filter((data) => {
            if (data.name.toLowerCase().includes(search.toLowerCase()) ||
              data.email.toLowerCase().includes(search.toLowerCase())
            ) {
          
             
              return data;


            }
    })
    var filteredValue1 = completedData.filter((data) => {
        if (data.name.toLowerCase().includes(search.toLowerCase()) ||
          data.email.toLowerCase().includes(search.toLowerCase())
        ) {
        //   console.log(data)
        // setpendingData(filteredValue)
         
          return data;


        }
})


       
        function FetchcompletedData(completedData){
            setCompleteData(completedData);
            setCompleteDataVisible(true);
            setpendingDataVisible(false);
            setPendingActiveButton(false);
            setCompleteActiveButton(true);
            
        }
        function FetchPendingData(PendingData){
            setpendingData(PendingData)
            setCompleteDataVisible(false);
            setpendingDataVisible(true);
            setPendingActiveButton(true)
            setCompleteActiveButton(false);
           
        }
        const onChange = (e) => {
            setSearch(e.target.value);
          };
    

          const getColorStyle = (value) => {
            try{
            switch (value) {
              case 'Low':
                return { color: 'green' };
              case 'Medium':
                return { color: ' rgb(220, 133, 133)' };
              case 'High':
                return { color: 'brown' };
              default:
                return {};
            }
        }
        catch(err){
            alert(err.message)
           }
          };
          const getCircleStyle = (value) => {
           try{
            switch (value) {
                case 'Low':
                  return { backgroundColor: 'green' };
                case 'Medium':
                  return { backgroundColor: ' rgb(220, 133, 133)' };
                case 'High':
                  return { backgroundColor: 'brown' };
                default:
                  return {};
              }
           }
           catch(err){
            alert(err.message)
           }
          };
          

   
    return(
        <div className="monitoring-div">
           <div className="heading">
           <h2 style={{marginLeft:"40px"}}>Monitoring</h2>
           </div>

            <div className="status-div">
                <div className="pending-completed-div">
                <button onClick={()=> FetchPendingData(PendingData)} className={activePendingButton? "underlined": " "}>Pending</button>
                <button onClick={()=> FetchcompletedData(completedData)} className={activeCompleteButton ? "underlined": " "}>Completed</button>
                </div>
               
                 <CloseAccount handleOpen={handleOpen} handleClose={handleClose} open={open}  className="close-account-btn"/>
            </div>
           <div>
            <Search search={search} onChange={onChange} />

           </div>
            <div>
               {completeDataVisible ?(
                <table >
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Risk Level</th>
                        <th>Action Reason</th>
                        <th>Time to Close</th>
                        <th>Date Added on</th>
                        <th>Action Taken By</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredValue1.map((item,i)=>(
                        <tr key={i}>
                            <td>{item.name} <br /> {item.email} <IosShareRoundedIcon  className="share-icon"/></td>
                            <td style={getColorStyle(item.risk_level)} >
                          <div className="risk-level">
                       
                            <div className="circle" style={getCircleStyle(item.risk_level)} ></div>
                                {item.risk_level}
                            </div></td>
                            <td>{item.action_reason}</td>
                            <td>{item.days}</td>
                            <td>{item.date}</td>
                            <td  className="action-column">
                            {item.action_taken}
                            <br />
                            {item. action_taken_email}
                            
                               
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
               ):( pendingDataVisible &&
                <table >
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Risk Level</th>
                        <th>Trigger Reason</th>
                        <th>In queue for</th>
                        <th>Date Added on</th>
                        <th>Previously Reviewed</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredValue.map((item,i)=>(
                        <tr key={i}>
                            <td >{item.name} <br /> {item.email} <IosShareRoundedIcon  className="share-icon"/></td>
                            <td style={getColorStyle(item.risk_level)}>
                            <div className="circle" style={getCircleStyle(item.risk_level)} ></div>
                                {item.risk_level}</td>
                            <td>{item.trigger_reason}</td>
                            <td>{item.days}</td>
                            <td>{item.date}</td>
                            <td  className="action-column">
                            {item.previously_reviewed}
                            <br />
                            {item.review_date}
                            
                               
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
               )}

            </div>
           
        </div>
    )
}
export default Monitoring