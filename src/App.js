import React from "react";
import "./App.css";
import "./App"
import HomePage from "./component/HomePage"
import Findaride from "./component/Findaride"
import Offeraride from "./component/Offeraride"
import Signup from "./component/Signup"
import Login from "./component/Login"
import { BrowserRouter , Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Route path="/" component={HomePage} exact="true"/>
     <Route path="/Findaride" component={Findaride}/>
     <Route path="/Offeraride" component={Offeraride}/>
     <Route path="/Signup" component={Signup}/>
     <Route path="/Login" component={Login}/>
     
     </BrowserRouter>
    
  );
}

export default App;
