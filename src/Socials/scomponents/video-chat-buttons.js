import React from 'react'

import PropTypes from 'prop-types'

import './video-chat-buttons.css'

const VideoChatButtons = (props) => {
  return (
    <div className={`video-chat-buttons-container ${props.rootClassName} `}>
      <button className="video-chat-buttons-button button" onClick={() => props.action()}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="video-chat-buttons-image"
        />
        <span className="video-chat-buttons-text">{props.text}</span>
      </button>
    </div>
  )
}

VideoChatButtons.defaultProps = {
  text: 'Button',
  rootClassName: '',
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

VideoChatButtons.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default VideoChatButtons
