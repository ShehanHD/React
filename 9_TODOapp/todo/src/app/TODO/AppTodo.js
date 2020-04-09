import React, { Component } from 'react';
import Todos from './todos';
import AddTodo from './addTodo';

class AppTodo extends Component {
  state = {
    todo: [
      {id: 1, content: "test 1"},
      {id: 2, content: "test 2"}
    ]
  }
  delTodo = (id) => {
    const todo = this.state.todo.filter(item => {
      return id !== item.id;
    });
    this.setState({
      todo
    })
  }

  addTodo = (newTodo) => {
    newTodo.id = Math.round(Math.random()*100)
      const todo = [...this.state.todo , newTodo];
      this.setState({
        todo
      })
  }

  render(){
    return (
      <div className="App">
        <h1 className="center blue-text">TODO LIST</h1>
        <Todos list={ this.state.todo } delTodo={ this.delTodo }/>
        <AddTodo addTodo={ this.addTodo }/>
      </div>
    );
  }
}

export default AppTodo;
