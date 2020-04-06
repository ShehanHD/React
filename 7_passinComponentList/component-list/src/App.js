import React, { Component } from 'react';
import Data from './Data';

class App extends Component {
  state = { 
    data : [
      { name: "Shehan", surname: "Don", id: 1},
      { name: "joe", surname: "doe", id:2}
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
