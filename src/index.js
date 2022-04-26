import React from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';
import Home from './Home';
import Events from './Events';
import Api from './Api';
import Socials from './Socials/Socials';
import J2D from './Socials/J2D';
import J2C from './Socials/J2C';
import J2F from './Socials/J2F';

render(
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Events" element={<Events />} />
      <Route path="/api" element={<Api />} />
      <Route path="/socials" element={<Socials />} />
      <Route path="/socials/j2d" element={<J2D />} />
      <Route path="/socials/j2c" element={<J2C />} />
      <Route path="/socials/j2f" element={<J2F />} />

    </Routes>
  </Router>,
  document.getElementById('root')
);
