import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Home from './Employee/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    {/* <Calculator/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
