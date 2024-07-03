import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Keep this import
import './index.css';
import App from './App';
import store from './store';
import Contact from './Pages/Contact';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Use Provider here */}
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
