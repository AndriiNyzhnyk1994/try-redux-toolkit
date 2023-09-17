import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { App2 } from './Example2/App2';
import App3 from './Example3/App3';
import { setupStore3 } from './Example3/store3/store3';
import { setupStore4 } from './Example4/store4/store4';
import { App4 } from './Example4/App4';
import { store1 } from './Example1/store';
import App1 from './Example1/App1';
import { setupStore } from './Example2/store/store2';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const store2 = setupStore()
// function setupStore returns our store (ex2)

const store3 = setupStore3()

const store4 = setupStore4()


root.render(<Provider store={store1}>
  <App1 />
</Provider>)


reportWebVitals();
