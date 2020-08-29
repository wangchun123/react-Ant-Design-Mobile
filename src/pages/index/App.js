import React from 'react';
import logo from '@/assets/logo.svg';
import './App.scss';

function App({ history }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => history.push('/pdf')}>go to PDF</button>
      </header>
    </div>
  );
}

export default App;
