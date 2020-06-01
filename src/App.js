import React from 'react';
import Game from './game/Game.js';
import './App.css';

function App() {
    
  return (
      <div className="App">
          <div className="container">
              <div className="row">
                  <div className="col">
                      <Game categoryID={0} questionID={0}/>
                  </div>
              </div>
          </div>
          
    </div>
  );
}

export default App;
