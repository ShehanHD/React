import React, { Component } from 'react';
import NavBar from './component/navBar';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import { BrowserRouter, Router, Route } from 'react-router-dom'


class App extends Component {


  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
