import React from "react";
import "./style.css";

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
function Search({search, onChange}){
    return(
        <div className="search-div">
            <div className="search-input-div">
                < SearchRoundedIcon  className="search-icon"/>
                <input type="text" placeholder="Search by Name or Email" 
                value={search}
                onChange={onChange}  />
            </div>
            <div>
            <select>
            <option value="">Trigger Reason</option>
           <option value="hard-flag">Hard Flag</option>
            <option value="restricted-unflag">Restricted Unflag</option>
            <option value="temp-flag">Temp Flag</option>
            <option value="reviewed">Reviewed</option>
            </select>
            </div>
            <div>
            <select>

            <option value="">Risk Level</option>
            <option value="low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
           
            </select>
            </div>
            
       </div>    
    
       )
}
export default Search;