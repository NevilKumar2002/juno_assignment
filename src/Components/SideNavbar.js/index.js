import React from "react";

import "./style.css"
import { Link} from "react-router-dom";
function SideNavbar(){
    return(
        <div className="Navbar">
          <div className="logo">
          <hr />
           <h2>LOGO HERE</h2>
           <hr />
          </div>
           <div className="Navbar-container">
                <Link to ="/overview" className="link" >OverView</Link>
                <Link to ="/onboarding"  className="link" >Onboarding</Link>
                <Link to ="/"             className="link" >Monitoring</Link>
                <Link to ="/flagging"  className="link">Flagging</Link>
                <Link to ="/source"  className="link" >Source Of Income</Link>
                <Link to="/uar"  className="link" >UAR</Link>
          
           </div>
           <div className="mask-profile">
            <img src="https://media.cnn.com/api/v1/images/stellar/prod/230712124429-01-elon-musk-0616.jpg?c=original"  className="mask-image"/>
           <div className="mask-text">
            <p>Elan Mask</p>
            <p>elan@twitter.com</p>
           </div>
           
           
           </div>

        </div>
    )
}
export default SideNavbar;