import React from 'react';
import logo from './logo.svg';
import Title from './components/Title/Title'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title title="Hello Team"/>
      </header>
    </div>
  );
}

export default App;
