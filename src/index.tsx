import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Example1/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Example1/store';
import { App2 } from './Example2/App2';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(<Provider store={store}>
  <App2 />
</Provider>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
