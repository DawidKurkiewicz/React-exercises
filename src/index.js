import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
console.log('this is function', App)
console.log('component', App())
console.log('this returns', <App />)
ReactDOM.render(<App />, document.getElementById('root'));
