import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { App2 } from './Example2/App2';
import { setupStore } from './Example2/store/store2';
import App3 from './Example3/App3';
import { setupStore3 } from './Example3/store3/store3';
import { setupStore4 } from './Example4/store4/store4';
import { App4 } from './Example4/App4';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const store = setupStore()
// function setupStore returns our store

const store3 = setupStore3()

const store4 = setupStore4()


root.render(<Provider store={store4}>
  <App4 />
</Provider>)


reportWebVitals();
