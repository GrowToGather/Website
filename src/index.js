import React from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';
import './shared/style.css'
import Home from './Website/home';
import Events from './Website/events';
import Api from './API/Api';
import SocialsApp from './Socials/socials-app';
import Chat from './Socials/join-to-chat';
import VideoChat from './Socials/join-to-video-chat';

import './Socials/Server/ServerConnection'

render(
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Events" element={<Events />} />
      <Route path="/api" element={<Api />} />
      <Route path="/socials" element={<SocialsApp />} />
      <Route path="/socials/chat" element={<Chat />} />
      <Route path="/socials/videochat" element={<VideoChat />} />

    </Routes>
  </Router>,
  document.getElementById('root')
);
