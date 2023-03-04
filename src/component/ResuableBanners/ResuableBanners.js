import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from "react-router-dom"
function ResuableBanners(){
return(
<>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><Link to='/socialBoutton'><li>socialBoutton</li></Link> </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to='/Notification'><li>Notification</li></Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><Link to='/CongratsCard'><li>CongratsCard</li></Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link "><Link to='/Memberlogin'><li></li>Login</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link "><Link to='/Fruitscounter'><li>Fruitscounter</li></Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link "><Link to='/TechnologyCards'><li>Cards</li></Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link "><Link to='/feedback'><li>Feedback</li></Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link "><Link to='/feedback'><li>task1</li></Link></a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        
</>
)
}
export default ResuableBanners;