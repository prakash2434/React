import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './congratscard.css'
function Card() {
  return (

   <>
   <div className='img col-12 col-sm-12 col-lg-12 col-xl-12'>
    <h1 className='h1'>Congratulations</h1>
    <div className='div1'>
    <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"/>
    <h3>Kiran V</h3>
    <p>Vishnu institute of computer Education and Technology</p>
    <p>Bhimavaram</p>
    <img src ="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"/>
   </div>
   </div>
   </>
   
  );
}

export default Card;