import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Social from './component/socialButtons/socialBoutton';
import CongratsCard from './component/Hello world/CongratsCard/Congratscard';
import Notification from './component/Notifications/Notification';
import Fruits from './component/Fruitscounter/Fruitscounter';
import Feedback from './component/feedback/feedback';
import Login from './component/Member login/login';
import Cards from './component/Technology Cards/Cards';
import Thanks from './component/feedback/thanks';
import ResuableBanners from './component/ResuableBanners/ResuableBanners';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App(){
  return (
<>
<BrowserRouter>
     <Routes>
         <Route path='/' element={<ResuableBanners/>}/>
         <Route path='/socialBoutton' element={[<ResuableBanners/>,<Social/>]}/>
         <Route path='/Notification' element={[<ResuableBanners/>,<Notification/>]}/>
         <Route path='/CongratsCard' element={[<ResuableBanners/>,<CongratsCard/>]}/>
         <Route path='/Fruitscounter' element={[<ResuableBanners/>,<Fruits/>]}/>
         <Route path='/Memberlogin' element={[<ResuableBanners/>,<Login/>]}/>
         <Route path='/TechnologyCards' element={[<ResuableBanners/>,<Cards/>]}/>
         <Route path='/feedback' element={[<ResuableBanners/>,<Feedback/>]}/>
         <Route path='/thanks' element={[<ResuableBanners/>,<Thanks/>]}/>
         
     </Routes>
  </BrowserRouter>
</>
  );
}

export default App;
