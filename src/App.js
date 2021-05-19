import React from 'react';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import './App.css';
import Home from './containers/Home';
import Global_Traffic_profiles from './containers/Global_Traffic_profiles';
import Traffic_profiles from './containers/Traffic_profiles';
import Switch_profiles from './containers/Switch_profiles';


import tp from './containers/tp';
import New_Switch_Profiles from './containers/New_Switch_Profiles';
import trial from './containers/trial';
import synthetic from './containers/synthetic';
import Analyze from './containers/Analyze';
import Run_profiles from './containers/Run_profiles';
import ReactDOM from 'react-dom';
import Category from './containers/Category';



function App() {
  return (
    <div className="App">
      <Router>
      <Switch>

      <Route path="/" exact component ={Home} />
        <Route path="/Global_Traffic_profiles" component ={Global_Traffic_profiles} />
        <Route path="/Traffic_profiles" component ={Traffic_profiles} />
        <Route path="/Category" component ={Category} />
        <Route path="/Switch_profiles" component ={Switch_profiles} />
        <Route path="/New_Switch_Profiles" component ={New_Switch_Profiles} />
         <Route path="/tp" component ={tp} /> 
        
         <Route path="/synthetic" component ={synthetic} /> 
         <Route path="/Analyze" component ={Analyze} /> 
         <Route path="/trial" component ={trial} /> 
         <Route path="/Run_profiles" component ={Run_profiles} /> 
      </Switch>

      </Router>
    
      
      </div>
  
  );
}

export default App;
