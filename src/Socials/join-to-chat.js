import React from 'react'

import { Helmet } from 'react-helmet'

import ChatPreview from './scomponents/chat-preview'
import HLine from '../shared/h-line'
import MessageReceived from './scomponents/message-received'
import MessageSent from './scomponents/message-sent'
import FooterBG from './scomponents/footer-b-g'
import Settings from './settings'
import Header from './scomponents/header'
import './join-to-chat.css'

const JoinToChat = (props) => {
  const [openSettings, setOpenSettings] = React.useState(false)

  return (
    <div className="join-to-chat-container">
      <Helmet>
        <title>JoinToChat - Total Thrifty Penguin</title>
        <meta
          property="og:title"
          content="JoinToChat - Total Thrifty Penguin"
        />
      </Helmet>
      <Header open={setOpenSettings}/>
      <div className="join-to-chat-container2">
        <div className="join-to-chat-container3">
          <ChatPreview rootClassName="chat-preview-root-class-name"></ChatPreview>
          <HLine rootClassName="h-line-root-class-name3"></HLine>
          <ChatPreview rootClassName="chat-preview-root-class-name1"></ChatPreview>
        </div>
        <div className="join-to-chat-container4">
          <div className="join-to-chat-container5">
            <MessageReceived rootClassName="message-received-root-class-name1"></MessageReceived>
            <MessageReceived rootClassName="message-received-root-class-name2"></MessageReceived>
            <MessageSent rootClassName="message-sent-root-class-name"></MessageSent>
            <MessageReceived rootClassName="message-received-root-class-name"></MessageReceived>
            <MessageSent rootClassName="message-sent-root-class-name1"></MessageSent>
            <MessageSent rootClassName="message-sent-root-class-name2"></MessageSent>
          </div>
          <div className="join-to-chat-container6">
            <input
              type="text"
              placeholder="message"
              className="join-to-chat-textinput input"
            />
            <button className="join-to-chat-button1 button">Send</button>
          </div>
        </div>
      </div>
      <FooterBG rootClassName="footer-b-g-root-class-name1"></FooterBG>
      { openSettings ? <Settings close={setOpenSettings}/> : null }
    </div>
  )
}

export default JoinToChat
