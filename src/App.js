import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'

function App() {

  //Pega informações da store
  const counter = useSelector(({ counter }) => counter)

  //Dispara uma action
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>Counter: {counter}</p>
          <button
            style={{ margin: 10 }}
            onClick={() => dispatch({ type: 'INCREMENT' })}
          >
            INCREMENT
          </button>
          <button
            onClick={() => dispatch({ type: 'DECREMENT' })}
          >
            DECREMENT
          </button>
        </div>
      </header>
    </div>
  );

}

export default App;
