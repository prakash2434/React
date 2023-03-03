import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Thanks(){
    return(

          <>
          <div className="im p-4">
         <div className="container row justify-content-center bg-white p-5">
             <div className="col-lg-12 col-md-12 col-sm-12 col-12 m-3">
        
            <h1 className="text-center">Thanks<br></br><FontAwesomeIcon icon={faHeart} className="c"/><br></br>We will use your feedback to improve our customer support performance</h1>
            <div className="container p-5"></div>
            
            
             
             </div>
            </div>
            </div>
          
          
    
          </>

    )
}
export default Thanks;