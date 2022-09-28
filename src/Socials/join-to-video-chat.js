import React from 'react'

import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom';

import HLine from '../shared/h-line'
import MessageReceived from './scomponents/message-received'
import MessageSent from './scomponents/message-sent'
import VideoChatButtons from './scomponents/video-chat-buttons'
import Settings from './settings'
import './join-to-video-chat.css'

const JoinToVideoChat = (props) => {
  const [openSettings, setOpenSettings] = React.useState(false)
  const [tippsTabDisplay, setTippsTabDisplay] = React.useState("flex")
  const [chatTabDisplay, setChatTabDisplay] = React.useState("flex")
  const [liked, setLiked] = React.useState({state: false, bg: "/images/shared/like.svg"})
  const [muted, setMuted] = React.useState({state: false, text: "Unmute", bg: "/images/socials/audio_off.svg"})
  const [hidden, setHidden] = React.useState({state: false, text: "Show Video", bg: "/images/socials/video_off.svg"})

  const navigate = useNavigate();


  function openSettingsWindow() {
    setOpenSettings(true)
  }

  function toggleTippsTab() {
    if (tippsTabDisplay == "none") {
      setTippsTabDisplay("flex")
    } else {
      setTippsTabDisplay("none")
    }
  }

  function toggleChatTab() {
    if (chatTabDisplay == "none") {
      setChatTabDisplay("flex")
    } else {
      setChatTabDisplay("none")
    }
  }

  function toggleLike() {
    if (liked.state) {
      setLiked({state: false, bg: "/images/shared/like.svg"})
    } else {
      setLiked({state: true, bg: "/images/shared/liked.svg"})
    }
  }

  function toggleMute() {
    if (muted.state) {
      setMuted({state: false, text: "Unmute", bg: "/images/socials/audio_off.svg"})
    } else {
      setMuted({state: true, text: "Mute", bg: "/images/socials/audio.svg"})
    }
  }
  
  function toggleHide() {
    if (hidden.state) {
      setHidden({state: false, text: "Show Video", bg: "/images/socials/video_off.svg"})
    } else {
      setHidden({state: true, text: "Hide Video", bg: "/images/socials/video.svg"})
    }
  }

  return (
    <div className="join-to-video-chat-container">
      <Helmet>
        <title>JoinToVideoChat - Total Thrifty Penguin</title>
        <meta
          property="og:title"
          content="JoinToVideoChat - Total Thrifty Penguin"
        />
      </Helmet>
      <div className="join-to-video-chat-top-level-container">
        <div className="join-to-video-chat-container01">
          <button className="join-to-video-chat-button button">
            <img
              alt="image"
              src="/images/socials/socials_icon.png"
              className="join-to-video-chat-image"
            />
            <span className="join-to-video-chat-text">
              <span>Socials</span>
            </span>
          </button>
          <span className="join-to-video-chat-text02">Time: 00:05</span>
        </div>
        <div className="join-to-video-chat-container02">
          <div className="join-to-video-chat-container03" style={{display: tippsTabDisplay}}>
            <span className="join-to-video-chat-text03">Common Interests</span>
            <HLine rootClassName="h-line-root-class-name4"></HLine>
            <ul className="join-to-video-chat-ul list">
              <li className="list-item">
                <span>Text</span>
              </li>
              <li className="list-item">
                <span>Text</span>
              </li>
              <li className="list-item">
                <span>Text</span>
              </li>
            </ul>
            <span className="join-to-video-chat-text07">Questions to Ask</span>
            <HLine rootClassName="h-line-root-class-name5"></HLine>
            <div className="join-to-video-chat-container04">
              <span className="join-to-video-chat-text08">Common:</span>
              <ul className="join-to-video-chat-ul1 list">
                <li className="list-item">
                  <span>Text</span>
                </li>
                <li className="list-item">
                  <span>Text</span>
                </li>
                <li className="list-item">
                  <span>Text</span>
                </li>
              </ul>
              <span className="join-to-video-chat-text12">Funny:</span>
              <ul className="join-to-video-chat-ul2 list">
                <li className="list-item">
                  <span>Text</span>
                </li>
                <li className="list-item">
                  <span>Text</span>
                </li>
                <li className="list-item">
                  <span>Text</span>
                </li>
              </ul>
              <span className="join-to-video-chat-text16">
                <span>Controversial</span>
                <span>:</span>
              </span>
              <ul className="join-to-video-chat-ul3 list">
                <li className="list-item">
                  <span>Text</span>
                </li>
                <li className="list-item">
                  <span>Text</span>
                </li>
                <li className="list-item">
                  <span>Text</span>
                </li>
              </ul>
              <span className="join-to-video-chat-text22">Special:</span>
              <ul className="join-to-video-chat-ul4 list">
                <li className="list-item">
                  <span>Text</span>
                </li>
                <li className="list-item">
                  <span>Text</span>
                </li>
                <li className="list-item">
                  <span>Text</span>
                </li>
              </ul>
              <span className="join-to-video-chat-text26">Risky:</span>
              <ul className="join-to-video-chat-ul5 list">
                <li className="list-item">
                  <span>Text</span>
                </li>
                <li className="list-item">
                  <span>Text</span>
                </li>
                <li className="list-item">
                  <span>Text</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="join-to-video-chat-container05">
            <img
              src="/images/socials/default_user.svg"
              alt="image"
              className="join-to-video-chat-image1"
            />
            <img
              src="/images/socials/default_user.svg"
              alt="image"
              className="join-to-video-chat-image2"
            />
          </div>
          <div className="join-to-video-chat-container06" style={{display: chatTabDisplay}}>
            <div className="join-to-video-chat-container07">
              <MessageReceived rootClassName="message-received-root-class-name3"></MessageReceived>
              <MessageReceived rootClassName="message-received-root-class-name4"></MessageReceived>
              <MessageSent rootClassName="message-sent-root-class-name3"></MessageSent>
              <MessageReceived rootClassName="message-received-root-class-name5"></MessageReceived>
              <MessageSent rootClassName="message-sent-root-class-name4"></MessageSent>
              <MessageSent rootClassName="message-sent-root-class-name5"></MessageSent>
            </div>
            <div className="join-to-video-chat-container08">
              <input
                type="text"
                placeholder="message"
                className="join-to-video-chat-textinput input"
              />
              <button className="join-to-video-chat-button1 button">
                <img
                  alt="image"
                  src="/images/socials/send.svg"
                  className="join-to-video-chat-image3"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="join-to-video-chat-container09">
          <VideoChatButtons
            text={muted.text}
            rootClassName="video-chat-buttons-root-class-name4"
            image_src={muted.bg}
            action={toggleMute}
          ></VideoChatButtons>
          <VideoChatButtons
            text={hidden.text}
            rootClassName="video-chat-buttons-root-class-name"
            image_src={hidden.bg}
            action={toggleHide}
          ></VideoChatButtons>
          <VideoChatButtons
            text="Tipps"
            rootClassName="video-chat-buttons-root-class-name6"
            image_src={"/images/socials/tipps.svg"}
            action={toggleTippsTab}
          ></VideoChatButtons>
          <VideoChatButtons
            text="Chat"
            rootClassName="video-chat-buttons-root-class-name3"
            image_src={"/images/socials/chat.svg"}
            action={toggleChatTab}
          ></VideoChatButtons>
          <VideoChatButtons
            text="Like"
            rootClassName="video-chat-buttons-root-class-name5"
            image_src={liked.bg}
            action={toggleLike}
          ></VideoChatButtons>
          <VideoChatButtons
            text="Help"
            rootClassName="video-chat-buttons-root-class-name2"
            image_src={"/images/socials/help.svg"}
          ></VideoChatButtons>
          <VideoChatButtons
            text="Settings"
            rootClassName="video-chat-buttons-root-class-name7"
            image_src={"/images/socials/settings.svg"}
            action={openSettingsWindow}
          ></VideoChatButtons>
          <VideoChatButtons
            text="Leave Event"
            rootClassName="video-chat-buttons-root-class-name1"
            image_src={"/images/socials/leave.svg"}
            action={() => navigate("/socials")}
          ></VideoChatButtons>
        </div>
      </div>
      <span className="join-to-video-chat-text30">Title</span>
      { openSettings ? <Settings close={setOpenSettings}/> : null }
    </div>
  )
}

export default JoinToVideoChat
