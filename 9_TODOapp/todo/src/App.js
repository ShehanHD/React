import React, { Component } from 'react';
import NavBar from './component/navBar';
import Home from './component/Home';
import Todo from './component/Todo';
import Contact from './component/Contact';
import Posts from './component/Posts';
import { BrowserRouter, Router, Route } from 'react-router-dom'


class App extends Component {


  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route path="/todo" component={Todo} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
