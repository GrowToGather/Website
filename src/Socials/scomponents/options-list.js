import React from 'react'

import PropTypes from 'prop-types'

import './options-list.css'

const OptionsList = (props) => {
  return (
    <div className="options-list-container">
      <div className="options-list-container1">
        <button className="options-list-button button">{props.button}</button>
        <button className="options-list-button1 button">{props.button1}</button>
      </div>
    </div>
  )
}

OptionsList.defaultProps = {
  button: 'Remove',
  button1: 'Share',
}

OptionsList.propTypes = {
  button: PropTypes.string,
  button1: PropTypes.string,
}

export default OptionsList
