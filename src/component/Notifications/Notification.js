import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './Notification.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircle, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
function Notification(){
        return(
<>
<div className="container-fluid p-5">
    <div>
<h1 className="h1">Notifications</h1>

<div className="col-6 bg-primary mt-3 p-3 h1 d-flex ">
    <FontAwesomeIcon icon={faCircleCheck} className="icon"/>
<h6>Information Message</h6>
</div>

<div className="col-6 bg-success mt-3 p-3 h1 d-flex">
    <FontAwesomeIcon icon={faCircleCheck}className="icon"/>
    <h6>Success Message</h6>
</div>

<div className="col-6 bg-warning mt-3 p-3 h1 d-flex">
    <FontAwesomeIcon icon={faBell}className="icon"/>
    <h6>Warning Message</h6>
</div>

<div className="col-6 bg-danger mt-3 p-3 h1 d-flex">
    <FontAwesomeIcon icon={faCircleExclamation}className="icon"/>
    <h6>Error Message</h6>
</div>
</div>
</div>
 
</>

)
}
export default Notification;