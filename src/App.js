import React from 'react';
import Game from './game/Game.js';
import './App.css';

function App() {
    
  return (
    <div className="App">
          <Game categoryID={0} questionID={0}/>
    </div>
  );
}

export default App;
