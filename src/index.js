import React from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';
import App from './App';
import Api from './Api';

render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/api" element={<Api />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
