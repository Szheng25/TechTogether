import React from 'react';
import logo from './securityLock.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Secure Me
        </h1>
        <p>
          Have you been hacked?
        </p>
        <p>
          If you've experienced any of these, you may be compromised:
        </p>
        <div class="flex-container">
          <div>1.</div>
          <div>2.</div>
          <div>3.</div>
        </div>
        <p>
          Next steps you can take:
        </p>
        <div class="flex-container">
          <div>1.</div>
          <div>2.</div>
          <div>3.</div>
        </div>

      </header>
    </div>
  );
}

export default App;
