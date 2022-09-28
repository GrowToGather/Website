import React from 'react'

import PropTypes from 'prop-types'

import './h-line.css'

const HLine = (props) => {
  return <div className={`h-line-container ${props.rootClassName} `}></div>
}

HLine.defaultProps = {
  rootClassName: '',
}

HLine.propTypes = {
  rootClassName: PropTypes.string,
}

export default HLine
