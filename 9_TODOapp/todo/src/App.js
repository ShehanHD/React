import React, { Component } from "react";
import NavBar from "./component/navBar";
import Home from "./component/Home";
import Todo from "./component/Todo";
import Contact from "./component/Contact";
import Posts from "./component/Posts";
import Post_detail from "./component/Post_detail";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={Posts} />
            <Route path="/todo" component={Todo} />
            <Route path="/contact" component={Contact} />
            <Route path="/:post_id" component={Post_detail} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
