import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './socialButton.css'
function Social(){
    return(

       <>
       <div className="div3">
       <h1 className="h1">Social Bouttons</h1>
       <div className="div2">
       <button className="btn btn-warning m-3 button1">Like</button>
       <button className="btn btn-light m-3 button2">Comment</button>
       <button className="btn btn-info m-3 button3">Share</button>
    
       </div>
       </div>
       </>

    )
}
export default Social;