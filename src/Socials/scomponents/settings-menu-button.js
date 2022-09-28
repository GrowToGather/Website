import React from 'react'

import PropTypes from 'prop-types'

import './settings-menu-button.css'

const SettingsMenuButton = (props) => {
  return (
    <div className="settings-menu-button-container">
      <button className="settings-menu-button-button button">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="settings-menu-button-image"
          style={{backgroundColor: props.color, borderColor: props.color}}
        />
        <span className="settings-menu-button-text">{props.text}</span>
      </button>
    </div>
  )
}

SettingsMenuButton.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: 'Button',
  image_alt: 'image',
}

SettingsMenuButton.propTypes = {
  image_src: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
}

export default SettingsMenuButton
