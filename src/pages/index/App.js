import React from 'react';
import logo from '@/assets/logo.svg';
import './App.scss';

const pageRouter = [
  { title: 'go to PDF', url: '/pdf' },
  { title: 'Checkbox', url: '/checkbox' },
  { title: 'Radio', url: '/radio' },
  { title: 'BaiduMap', url: '/baiduMap' },
];

function App({ history }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {pageRouter.map((item, index) => {
          return (
            <button onClick={() => history.push(`${item.url}`)} key={index}>
              {item.title}
            </button>
          );
        })}
      </header>
    </div>
  );
}

export default App;
