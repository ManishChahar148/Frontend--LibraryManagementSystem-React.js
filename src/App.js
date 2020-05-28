import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from  './components/HomeComponent/Home'
import StudentLibrary from './components/StudentLibraryComponent/StudentLibrary'
import AdminLibrary from './components/AdminLibraryComponent/AdminLibrary'
import Nav from './components/NavComponent/Nav';

function App() {

  
  return (
    <Router>
      <div>
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/adminlibrary" component={AdminLibrary}></Route>
          <Route path="/studentLibrary" component={StudentLibrary}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
