import React from 'react'
import './App.css';
// import Row from './Row'
// import requests from './request';
// import Banner from './Banner';
// import Nav from './Nav';
import Homescreen from './screens/Homescreen';
import Loginscreen from './screens/Loginscreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const user={name:"prathamesh"};
  // const user=null;
  return (
    <div className="App">
      {/* <h1>MOVIEFLIX</h1> */}
      
<Router>
<Routes> 
      {(!user) ? (<Route path="/" element={<Loginscreen/>}/>) :
         
          <Route path="/" element={<Homescreen />} />}
          {/* <Route exact path="/test" element={<h1>Hello</h1>} /> */}
          
        </Routes>
</Router>
    </div>
  );
  
}

export default App;
