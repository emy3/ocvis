import React from 'react';
import './App.css';
import ServerDetails from './components/ServerDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Minecraft Server</h1>
        <ServerDetails />
      </header>
    </div>
  );
};

export default App;
