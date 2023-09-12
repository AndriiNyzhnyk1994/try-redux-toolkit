import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { App2 } from './Example2/App2';
import { setupStore } from './Example2/store/store2';
import App3 from './Example3/App3';
import { setupStore3 } from './Example3/store3/store3';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const store = setupStore()
// function setupStore returns our store

const store3 = setupStore3()

root.render(<Provider store={store3}>
  <App3 />
</Provider>)


reportWebVitals();
