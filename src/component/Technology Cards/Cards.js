import React from "react";


function Cards(){
      
    return(
        <>
        <div className="container p-5 bg-primary">
            <div className="row p-3 mt-2">
                <h1 className="text-center text-light">Learn 4.0 Technology</h1>
                <p  className="text-center text-light">Communication Communication technology consists of any pieces of technology people use to communicate with one another</p>
                <div className="col-lg-5 bg-light p-3">
                   <h3>Data Scientist</h3>
                   <p>Data Science is an interdisciplinary field that focuses on extracting knowledge from data sets which are typically huge in amount. </p>
                   <img src="https://insidebigdata.com/wp-content/uploads/2019/04/DataScience_shutterstock_1054542323.jpg"className="col-lg-6 col-6 float-ent"></img>
                </div>
                <div className="col-lg-5 bg-light p-3">
                   <h3>VR Developer</h3>
                   <p>A VR developer creates completely new digital environments that people can see through a device such as the Oculus headset,</p>
                   <img src="https://filmdaily.co/wp-content/uploads/2018/02/playstation-vr-headset.jpg" className="col-lg-6 col-6 float-ent"></img>
                </div>
                <div className="col-lg-5 bg-light p-3">
                   <h3>Ios Developer</h3>
                   <p>Framework includes open source libraries, a CLI, and UI components. Build one backend for iOS and Android Apps with React Native, Ionic, and Flutter.</p>
                   <img src="https://vteams.com/wp-content/uploads/2020/11/Hire-iOS-developer.jpg"className="col-lg-6 col-6 float-ent"></img>
                </div>
                <div className="col-lg-5 bg-light p-3">
                   <h3>ML Engineer</h3>
                   <p>A machine learning engineer (ML engineer) is a programmer who designs and builds software that can automate artificial intelligence and machine learning (AI/ML) models</p>
                   <img src="https://datainsights.de/wp-content/uploads/2020/10/iStock-950196116-scaled.jpg"className="col-lg-6 col-6 float-left"></img>
                </div>

     </div>

   </div>
        </>

    )
}
export default Cards;