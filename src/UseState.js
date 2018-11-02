import React, { useState} from 'react';

const ExampleWithManyStates = () => {
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState({
        text: 'Learn Hooks'
    })
};

/*

You don't have to use many state variables. State variables can hold
objects and arrays just fine, so you can still group related data together.
However, unlike this.setState in a class, updating a state variable always replaces
it instead of merging it.


Split state into multiple state variables based on which values tend
to change together

When the state becomes too complex look to useReducer and create a reducer for it (UIEHandler)


*/



function UseState() {
    // Use state is a 'Hook'. 
    // useState returns a pair: the current state value and a function that lets you update it
    // count == currentState && setCount is the function that lets you update it
    const [count, setCount] = useState(0);
  
    // The 0 in useState is similar to this.state EXCEPT the state here doesn't have to be an object (but it can be)
  
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click Me
        </button>
      </div>
    );
  
  };

  export default UseState;