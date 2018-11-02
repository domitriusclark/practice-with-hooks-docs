import React, { Component } from 'react';
import './App.css';


import Counter from './Hooks/useReducer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;

/*

** Rules for Hooks **

- Only call Hooks at the TOP LEVEL. Don't call HOoks inside loops, conditions, or nested functions.

- Only call Hooks from React function Components. Don't call Hooks from regular JS functions.


*/

