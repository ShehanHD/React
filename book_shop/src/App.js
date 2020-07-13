import React, { Component } from 'react';
import NavBar from './component/layout/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className="row container">
            <Dashboard />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
