import React from 'react';
import './App.css';
import Canvas from './components/Canvas'

import needle from 'needle'
import require('dotenv').config()

function App() {
  return (
    <div className="App">
      <Canvas />

    </div>
  );
}

export default App;
