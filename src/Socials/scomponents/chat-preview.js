import React from 'react'

import PropTypes from 'prop-types'

import './chat-preview.css'

const ChatPreview = (props) => {
  return (
    <div className={`chat-preview-container ${props.rootClassName} `}>
      <div className="chat-preview-container1">
        <div className="chat-preview-container2">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="chat-preview-image"
          />
        </div>
        <div className="chat-preview-container3">
          <span className="chat-preview-text">{props.text}</span>
          <span className="chat-preview-text1">{props.text1}</span>
        </div>
      </div>
    </div>
  )
}

ChatPreview.defaultProps = {
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text1: 'Text',
  text: 'Text',
  rootClassName: '',
}

ChatPreview.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ChatPreview
