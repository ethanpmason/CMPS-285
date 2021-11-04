import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './landing-page/Home';
import About from './Nav/About';
import Services from './Services/service';
import Membership from './registration/membership';

import Login  from './login/login';

import NavigationBar from './Nav/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render(){
  return (
  
   <React.Fragment>
     <NavigationBar/>
      
        <Router>
          <Switch>
            <Route exact path ="/" component={Home} />
            <Route path ="/About" component ={About}/>
            <Route path ="/Services" component ={Services}/>
            <Route path ="/Membership" component ={Membership}/>
           
            <Route path ="/Login" component ={Login}/>
            
          </Switch>
        </Router>
      
    </React.Fragment>
    );
  }
}

export default App;
