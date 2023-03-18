import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const text = 'Hello';

const elem = (
  <div>
    <h2 className='text'>Text: {text}, {2 + 2}, {[1213]}, {[0, 1, 2, 3]}</h2>
    <input type='text' />
    <label htmlFor=""></label>
    <button tabIndex={0} >Click</button>
    <button tabIndex='0' >Click me!</button>

  </div>

);

//const elem = React.createElement('h2', { className: 'greetings' }, 'Hello World!')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem,
);

