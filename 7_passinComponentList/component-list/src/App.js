import React, { Component } from 'react';
import Data from './Data';

class App extends Component {
  state = { 
    data : [
      { name: "Shehan", surname: "Don", age:26, id: 1},
      { name: "joe", surname: "doe", age:100, id:2}
    ]
   }
  render() { 
    return ( 
      <div>
        <h1>App</h1>
        <Data data={ this.state.data }/>
      </div>
    );
  }
}

export default App;
