import React,{useState} from "react";
import './Fruits.css'


function Fruits(){
       const[mangonumber,setMangonnumber]=useState(0);
       const[banananumber,setBanananumber]=useState(0);
      var totalFruits;
       function total(){
        totalFruits= mangonumber+banananumber
        alert(totalFruits)
       }
    return(
     
        <>

      <h1 className="text-center bg-danger">Fruits</h1>
      <h1></h1>
      <h2></h2>
      <div className="conteiner p-5 text-center b">
      <h2>Bob ate {mangonumber} mangoes {banananumber} bananas</h2>
      
      <img src="https://th.bing.com/th/id/R.69597abdb68a3913063eca040e34f454?rik=RiX5%2b8dFfFC26w&riu=http%3a%2f%2fcdn140.picsart.com%2f273156853001211.png&ehk=r80M8KdLUpztMthw4ErRzTDpAeqeMphX1WFiKIYJP9A%3d&risl=&pid=ImgRaw&r=0" width="500px" height="500px"/>
      <img src="https://images.hdqwalls.com/download/minion-bananas-1280x1024.jpg" width="500px" height="500px"/>
      <br>
      </br><button onClick={()=>setMangonnumber(mangonumber+4)}>Eat mangoes</button>
      <button onClick={()=>setBanananumber(banananumber+5)}>Eat bananas</button>
      <button onClick={total}>Total Fruits</button>

</div>
</>
    )
}
export default Fruits;