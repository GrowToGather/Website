import React from 'react'

import PropTypes from 'prop-types'

import './message-sent.css'

const MessageSent = (props) => {
  return (
    <div className={`message-sent-container ${props.rootClassName} `}>
      <span className="message-sent-text">{props.text1}</span>
    </div>
  )
}

MessageSent.defaultProps = {
  text1: 'Message sent out',
  rootClassName: '',
}

MessageSent.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default MessageSent
