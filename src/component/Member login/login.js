import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faEnvelope, faLock} from "@fortawesome/free-solid-svg-icons";
import {faCircleExclamation} from "@fortawesome/free-solid-svg-icons";
import './login.css'

function Login(){
     return(
    
      <>
      <div className="container-fluid p-5 L">
            
            <div className="container row div1 mt-5">
                <div className="col-lg-6">
                    <img src="https://cdn.vectorstock.com/i/1000x1000/32/91/laptop-login-password-on-lock-screen-computer-vector-28503291.webp" width="70%" className="margin2 picture"/>
                </div>
                <div className="col-lg-6 deflax">
                <div className="margin2">
                <h1 className="button">Member Login</h1>
                <div className="border">
                <div className="mb-3 d-flex">
                <FontAwesomeIcon icon={faEnvelope} className="size"/><input type="email"  name="email" placeholder="email" className=" wet"/>
                </div>
                </div>
                <br/>
                <div className="border" >
                <div className="mb-3 d-flex">
                <FontAwesomeIcon icon={faLock} className="size"/><input type="password" name="password"  placeholder="password" className=" wet"/>
                </div>
                </div>
                <div className="">
                    <button type="submit" className="btn btn-success button">Sing Up</button>

                </div>
                <p className="forgot-password text-right button">Forgot <a href="/sign-in"><span className="color1">Username / Password?</span></a></p>
                <br/><br/>
                <div>
                    <a href="/createaccount-in"><span className="color1 button">Create your account?</span></a>
                </div>
                </div>
                </div>
            </div>
        </div>
      </>
)
}
export default Login;
