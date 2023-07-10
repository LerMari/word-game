import React from 'react';
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import Letter from './components/Letter';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>WORDLE</h1>
      </nav>
      <Board />
      <Keyboard />  
      <Letter />
    </div>
  );
}

export default App;
