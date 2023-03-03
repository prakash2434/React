import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Thanks from "./thanks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear,faFaceMeh,faFaceLaughBeam } from "@fortawesome/free-regular-svg-icons";
import './feedback.css';
import { Link } from "react-router-dom";
function Feedback(){

    return(
            <>
            <div className="text-center im p-5">
                <div className=" bg-white p-5">
                    <h1>How satisfied are you with our customer support performance?</h1>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 justify-content-center text-center"> 
                                    <Link to='/thanks'><FontAwesomeIcon icon={faFaceSadTear}className="t"/><br/><p className="text-center">sad</p></Link>
                                </div>
            
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 justify-content-center text-center">
                                    <Link to='/thanks'><FontAwesomeIcon icon={faFaceMeh}className="t"/><br/><p className="text-center">None</p></Link>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 justify-content-center text-center">
                                    <Link to='/thanks'><FontAwesomeIcon icon={faFaceMeh}className="t"/><br/><p className="text-center">happy</p></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


      
     </>
    );
}
export default Feedback;