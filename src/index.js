import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"; 
import { render } from "react-dom";


const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement

);

