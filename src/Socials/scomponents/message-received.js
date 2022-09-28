import React from 'react'

import PropTypes from 'prop-types'

import './message-received.css'

const MessageReceived = (props) => {
  return (
    <div className={`message-received-container ${props.rootClassName} `}>
      <span className="message-received-text">{props.text1}</span>
    </div>
  )
}

MessageReceived.defaultProps = {
  rootClassName: '',
  text1: 'Message received',
}

MessageReceived.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default MessageReceived
