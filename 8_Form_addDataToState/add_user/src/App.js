import React, { Component } from 'react';
import Data from './Data';
import AddUser from './AddUser';
import './App.css';

class App extends Component {
  state = { 
    data : [
      { name: "Shehan", surname: "Don", age:26, id: 1},
      { name: "dsds", surname: "asdsd", age:32, id: 2},
      { name: "asdsa", surname: "asd", age:12, id: 3},
      { name: "asd", surname: "adsas", age:22, id: 4},
      { name: "joe", surname: "doe", age:100, id:5}
    ]
   }
   newData = (new_data) => {
      new_data.id = Math.round(Math.random()*100000);
      let copyData = [...this.state.data, new_data];
      this.setState({
         data : copyData
      });
   }
  render() { 
    return ( 
      <div>
        <h1>App</h1>
        <AddUser newData={ this.newData }/>
        <Data data={ this.state.data }/>
      </div>
    );
  }
}

export default App;
