import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'

import Home from "./page/Home.jsx";
import AddLec from "./page/AddLec.jsx";
import AddCourse from "./page/AddCourse.jsx";
import AddData from './page/AddData';
function App() {
  return (
    
    <div className="App">
      <div className='AppGlass'> 
        <BrowserRouter>
          <Sidebar>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/AddData" element={<AddData/>}/>
              <Route path="/AddLec" element={<AddLec/>}/>
              <Route path="/AddCourse" element={<AddCourse/>}/>
            </Routes>
          </Sidebar>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
